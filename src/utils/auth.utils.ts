/*
 * NOTE: The reason why not using the cookies from next/headers
 *  -> cookies from next/headers can only be used in sc or sever action (HTTP only cookie can not read from client) (cannot use it in client side)
 *  -> so I switching to use cookies-next to handle cookies
 * */

import { cache } from "react"
import { isWindowDefined } from "@/utils/common"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import axios from "axios"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { jwtDecode } from "jwt-decode"

export const saveAccessTokenToCookie = (accessToken: string) => {
  setCookie("access-token", accessToken, {
    path: "/",
  })
}

export const getAccessTokenFromCookie = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/auth/get-access-token"
  )

  const { accessToken } = response.data as { accessToken: string | undefined }

  return accessToken
}

export const clearAccessTokenFromCookie = () => {
  deleteCookie("access-token")
}

export const saveRefreshTokenToCookie = (refreshToken: string) => {
  setCookie("refresh-token", refreshToken, {
    path: "/",
  })
}

export const getRefreshTokenFromCookie = () => {
  return getCookie("refresh-token")
}

export const clearRefreshTokenFromCookie = () => {
  deleteCookie("refresh-token")
}

// export const refreshAccessToken = async (): Promise<{
//   accessToken: string
//   refreshToken: string
// }> => {
//   try {
//     const response = await axios.post("/api/auth/refresh", null, {
//       withCredentials: true,
//     })
//     const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
//       response.data
//     return { accessToken: newAccessToken, refreshToken: newRefreshToken }
//   } catch (error) {
//     throw new Error("Unable to refresh token")
//   }
// }

export const decodeToken = (token: string): { exp: number } => jwtDecode(token)

export const saveUserProfile = (userProfile: { userId: string }) => {
  if (!isWindowDefined()) {
    return
  }

  window.localStorage.setItem("user", JSON.stringify(userProfile))
}

export const getUserProfile = cache(async () => {
  return await UserRepository.profile()
})

export const clearUserProfile = () => {
  if (!isWindowDefined()) {
    return
  }

  window.localStorage.removeItem("user")
}

export const clearTokens = () => {
  clearAccessTokenFromCookie()
  clearRefreshTokenFromCookie()
  clearUserProfile()
}
