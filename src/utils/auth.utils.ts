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
   * Handle access token retrieval based on token status:
   *
   * - In cases where the access token is expired or missing, the new token
   *   needs to be retrieved from `set-cookie` rather than directly from `cookies`.
   *   This is due to refresh token rotation (handled in middleware as proxy).
   * - For the first render, the token will be in `set-cookie` because it may
   *   not yet be available directly from `cookies` due to middleware handling.
   * - If an initial access token is available, we check if it’s expired.
   *   If expired, or if no token is found, retrieve a new access token from `set-cookie`.
   */
  if (accessToken) {
    /**
     * Scenario 1: Access token is available but may be expired.
     *
     * - If the access token exists but is expired, it triggers a token refresh.
     * - Due to refresh token rotation (in middleware), the new token appears in `set-cookie`.
     * - However, on the first render, it is not yet accessible directly from `request.headers.get("set-cookie")`
     *   because it has just rotated. Thus, we check `set-cookie` for the updated token.
     * - After the first render, the access token will become directly available from `cookies`.
     */
    const decoded = jwtDecode(accessToken)

    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      // Token is expired, try to retrieve a new one from headers
      newAccessToken = retrieveTokenFromHeader()
    }

    /**
     * If access token is available and not expired, return it to the user
     * */
  } else {
    /**
     * Scenario 2: Access token is missing initially.
     *
     * - When there is no access token initially in `cookies`, we need to retrieve it
     *   from `set-cookie` due to refresh token rotation.
     * - This rotation (handled in middleware) places the updated token in `set-cookie`
     *   rather than `cookies` directly.
     * - On the first render, the access token may not yet be available from `cookies`.
     * - After the first render, it will appear directly in `cookies` for subsequent requests.
     */
    newAccessToken = retrieveTokenFromHeader()
  }

  // The reason why refresh does not set the `cookies` directly is still unknown

  if (!newAccessToken) {
    return undefined
  }

  return newAccessToken
}
