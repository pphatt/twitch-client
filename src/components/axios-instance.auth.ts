import { accessTokenContext } from "@/middleware/with-auth"
import { isWindowDefined } from "@/utils/common"
// import xior, { XiorError, XiorRequestConfig } from "xior"

import axios, { type AxiosError, type AxiosRequestConfig } from "axios"

const authAxiosInstance = axios.create({
  baseURL: "http://localhost:3001",
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

    if (!isWindowDefined()) {
      console.log("call inside interceptors.request")

      const { cookies } = await import("next/headers")
      const cookiesString = cookies()
        .getAll()
        .map((item) => `${item.name}=${item.value}`)
        .join("; ")

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
  (error: AxiosError) => {
    const originalRequest = error.config

    console.log(accessTokenContext)

    console.log("originalRequest")
    console.log(originalRequest)
    console.log(error.response?.status === 401)
    console.log(isWindowDefined())
    console.log(!originalRequest?.url?.includes("/sign-in"))

    if (
      error.response?.status === 401 &&
      isWindowDefined() &&
      !originalRequest?.url?.includes("/sign-in")
    ) {
      console.log("render here")
      if (!isRefreshing) {
        // TODO: handle refresh token queue here
      }
    }

    return Promise.reject(error)
  }
)

export { authAxiosInstance }
