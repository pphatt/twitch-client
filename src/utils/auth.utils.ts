/*
 * NOTE: The reason why not using the cookies from next/headers
 *  -> cookies from next/headers can only be used in sc or sever action (HTTP only cookie can not read from client) (cannot use it in client side)
 *  -> so I switching to use cookies-next to handle cookies
 * */

import { cache } from "react"
import { isClientSide } from "@/utils/common"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { deleteCookie } from "cookies-next"
import { jwtDecode } from "jwt-decode"

export const clearAccessTokenFromCookie = () => {
  deleteCookie("access-token")
}

export const clearRefreshTokenFromCookie = () => {
  deleteCookie("refresh-token")
}

export const decodeToken = (token: string): { exp: number } => jwtDecode(token)

export const saveUserProfile = (userProfile: { userId: string }) => {
  if (!isClientSide()) {
    return
  }

  window.localStorage.setItem("user", JSON.stringify(userProfile))
}

export const getUserProfile = cache(async () => {
  return await UserRepository.profile()
})

export const clearUserProfile = () => {
  if (!isClientSide()) {
    return
  }

  window.localStorage.removeItem("user")
}

export const clearTokens = () => {
  clearAccessTokenFromCookie()
  clearRefreshTokenFromCookie()
  clearUserProfile()
}
