/*
 * NOTE: The reason why not using the cookies from next/headers
 *  -> cookies from next/headers can only be used in sc or sever action (HTTP only cookie can not read from client) (cannot use it in client side)
 *  -> so I switching to use cookies-next to handle cookies
 * */

import { cache } from "react"
import type { NextRequest } from "next/server"
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

export const handleSelectLatestAccessToken = (request: NextRequest) => {
  const accessToken = request.cookies.get("access-token")?.value
  let newAccessToken: string | undefined = accessToken

  const retrieveTokenFromHeader = () => {
    const setCookieHeader = request.headers.get("set-cookie")
    const accessTokenMatch = setCookieHeader?.match(/access-token=([^;]*)/)
    return accessTokenMatch ? accessTokenMatch[1] : undefined
  }

  /**
   * Handle access token retrieval based on access token status:
   *
   * - Any case of access token expiration or absence requires the access token
   *   to be retrieved from `set-cookie`, not directly from `cookies`
   *   because of the refresh token process (fresh token rotation), for the first
   *   render it is cannot get directly from request.headers.get("set-cookie") so
   *   have to get it in `set-cookie`.
   * - If an initial access token is available, we check if it’s expired.
   *   If expired, or if no token is initially found, we attempt to retrieve
   *   the new access token from `set-cookie`.
   */
  if (accessToken) {
    /**
     * Handle token in two scenarios:
     *
     * Scenario 1 (access token expiration):
     * - The access token exists but is expired, requiring us to check the expiration.
     * - Token is refreshed (refresh token rotation) (which happened in middleware due to
     *   using route handler as proxy).
     * - But first render it will not be available in request.headers.get("set-cookie") so
     *   have to get it in `set-cookie` headers.
     * - After the first render, it will be in request.headers.get("set-cookie") again.
     */
    const decoded = jwtDecode(accessToken)

    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      // Token is expired, try to retrieve a new one from headers
      newAccessToken = retrieveTokenFromHeader()
    }

    // do comment for this here, it goes by:
    // if access token available and not expired return it to user
  } else {
    /**
     * Handle token in two scenarios:
     *
     * Scenario 2 (absence access token):
     * - No access token was initially found in cookies.
     * - Token is refreshed (refresh token rotation) (which happened in middleware due to
     *   using route handler as proxy).
     * - But first render it will not be available in request.headers.get("set-cookie") so
     *   have to get it in `set-cookie` headers.
     * - After the first render, it will be in request.headers.get("set-cookie") again.
     */
    newAccessToken = retrieveTokenFromHeader()
  }

  if (!newAccessToken) {
    return undefined
  }

  return newAccessToken
}
