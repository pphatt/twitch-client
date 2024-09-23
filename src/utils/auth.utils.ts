/*
 * NOTE: The reason why not using the cookies from next/headers
 *  -> cookies from next/headers can only be used in sc or sever action (cannot use it in client side)
 *  -> so I switching to use cookies-next to handle cookies
 * */

import { deleteCookie, getCookie, setCookie } from "cookies-next"

export const saveAccessToken = (accessToken: string) => {
  setCookie("access-token", accessToken, {
    path: "/",
  })
}

export const getAccessToken = () => {
  return getCookie("access-token")
}

export const deleteAccessToken = () => {
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

export const deleteRefreshToken = () => {
  deleteCookie("refresh-token")
}

export const saveUserProfile = (userProfile: { userId: string }) => {
  window.localStorage.setItem("user", JSON.stringify(userProfile))
}

export const getUserProfile = () => {
  const user = window.localStorage.getItem("user")

  return user ? (JSON.parse(user) as { userId: string }) : null
}

export const deleteUserProfile = () => {
  window.localStorage.removeItem("user")
}
