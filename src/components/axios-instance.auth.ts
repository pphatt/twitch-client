import { isServerSide } from "@/utils/common"
import { BackendURL } from "@modules/core/presentation/endpoints/default.endpoints"
import axios, { type AxiosError, type AxiosRequestConfig } from "axios"

const authAxiosInstance = axios.create({
  baseURL: BackendURL,
})

let isRefreshing = false
let refreshQueue: Array<{
  resolve: (value?: unknown) => void
  reject: (reason?: unknown) => void
  config: AxiosRequestConfig
}> = []

const processQueue = (error: AxiosError | null) => {
  refreshQueue.forEach((prom) => {
    if (!error) {
      prom.resolve(authAxiosInstance.request(prom.config))
    } else {
      prom.reject(error)
    }
  })

  refreshQueue = []
}

authAxiosInstance.interceptors.request.use(
  async (config) => {
    console.log("call out side interceptors.request")

    if (!isServerSide()) {
      console.log("call inside interceptors.request")

      const { cookies } = await import("next/headers")
      const cookiesString = cookies()
        .getAll()
        .map((item) => `${item.name}=${item.value}`)
        .join("; ")

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      config.headers = { ...config.headers, cookie: cookiesString }
    }

    return config
  },
  (error) => {
    console.log("call out side interceptors.request error")
    return Promise.reject(error)
  }
)

authAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config

    console.log("originalRequest")
    console.log(originalRequest)

    if (
      error.response?.status === 401 &&
      isServerSide() &&
      originalRequest &&
      !originalRequest?.url?.includes("/sign-in")
    ) {
      if (!isRefreshing) {
        isRefreshing = true

        try {
          await axios.post("/api/auth/refresh-token")
          isRefreshing = false
          processQueue(null)

          return authAxiosInstance.request(originalRequest)
        } catch (refreshError) {
          isRefreshing = false
          processQueue(refreshError as AxiosError)

          return Promise.reject(refreshError)
        }
      }

      return new Promise((resolve, reject) => {
        if (originalRequest) {
          refreshQueue.push({ resolve, reject, config: originalRequest })
        } else {
          reject(error)
        }
      })
    }

    if (isServerSide() && error.response?.status === 401) {
      window.location.reload()
    }

    return Promise.reject(error)
  }
)

export { authAxiosInstance }
