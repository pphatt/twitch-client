/*
 * NOTE: The reason why not using the cookies from next/headers
 *  -> cookies from next/headers can only be used in sc or sever action (HTTP only cookie can not read from client) (cannot use it in client side)
 *  -> so I switching to use cookies-next to handle cookies
 * */

import { isWindowDefined } from "@/utils/common"
import { deleteCookie, getCookie, setCookie } from "cookies-next"

export const saveAccessToken = (accessToken: string) => {
  setCookie("access-token", accessToken, {
    path: "/",
  })
}

export const getAccessToken = () => {
  return getCookie("access-token")
}

export const clearAccessToken = () => {
  deleteCookie("access-token")
}

export const saveRefreshToken = (refreshToken: string) => {
  setCookie("refresh-token", refreshToken, {
    path: "/",
  })
}

export const getRefreshToken = () => {
  return getCookie("refresh-token")
}

export const clearRefreshToken = () => {
  deleteCookie("refresh-token")
}

export const saveUserProfile = (userProfile: { userId: string }) => {
  if (!isWindowDefined()) {
    return
  }

  window.localStorage.setItem("user", JSON.stringify(userProfile))
}

export const getUserProfile = () => {
  const user = isWindowDefined() ? window.localStorage.getItem("user") : null

  return user ? (JSON.parse(user) as { userId: string }) : null
}

export const clearUserProfile = () => {
  if (!isWindowDefined()) {
    return
  }

  window.localStorage.removeItem("user")
}

export const clearUserSession = () => {
  clearAccessToken()
  clearRefreshToken()
  clearUserProfile()
}
