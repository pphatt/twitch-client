import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server"
import type { CustomMiddleware } from "@/middleware/chain"
// import { createAuthHeaders } from "@/middleware/utils/create-auth-headers"
import { refreshAccessToken } from "@/middleware/utils/refresh-access-token"
import { jwtDecode } from "jwt-decode"

const publicRoutes = [
  "/directory",
  "/directory/all",
  "/directory/following",
  "/about",
  "/contact",
  "/terms",
  "/privacy",
  "/api",
  "/api/webhooks",
]

const authRoutes = ["/login", "/signup", "/user/account-recovery"]

const publicDynamicRouteRegex = [/^\/([^\/]+)$/, /^\/popout\/([^\/]+)$/] // ["/:username", "/popout/:username"]

export function withAuth(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const pathname = request.nextUrl.pathname
    let accessToken = request.cookies.get("access-token")?.value
    let refreshToken = request.cookies.get("refresh-token")?.value

    // const headers = createAuthHeaders(request.headers, {
    //   accessToken,
    //   refreshToken,
    // })

    const isAuthRoute = authRoutes.some((path) => pathname.startsWith(path))
    const isAuthenticated = !!accessToken
    const url = new URL(request.nextUrl.origin)

    /*
     * CHECKING THIS EARLY DUE TO MANY REASONS AS THE FLOW BELOW:
     * - when navigate to the auth route when authenticated while atk expire will redirect you to the home page
     * - which is first when navigate to the authRoute it will refresh token first,
     *   and then it will redirect to home page BUT without the cookies or set-cookie on the header causing refresh again
     *   but with old rtf making user have to login again.
     * */
    if ((isAuthenticated || refreshToken) && isAuthRoute) {
      //  If a user tries to access an auth route while being authenticated,
      //  redirect them to the home page and open login dialog
      url.pathname = "/"
      return NextResponse.redirect(url)
    }

    if (accessToken) {
      const decoded = jwtDecode(accessToken)

      if (decoded.exp && decoded.exp < Date.now() / 1000) {
        if (refreshToken) {
          try {
            response = await refreshAccessToken(response, refreshToken)
            accessToken = response.cookies.get("access-token")!.value
            refreshToken = response.cookies.get("refresh-token")!.value

            request.cookies.set("access-token", accessToken)
            request.cookies.set("refresh-token", refreshToken)
          } catch (_) {
            response.cookies.delete("access-token")
            response.cookies.delete("refresh-token")
          }
        }
      }
    } else if (refreshToken) {
      try {
        // No access token, but we have a refresh token, so try refreshing
        response = await refreshAccessToken(response, refreshToken)
        accessToken = response.cookies.get("access-token")!.value
        refreshToken = response.cookies.get("refresh-token")!.value

        request.cookies.set("access-token", accessToken)
        request.cookies.set("refresh-token", refreshToken)
      } catch (_) {
        response.cookies.delete("access-token")
        response.cookies.delete("refresh-token")
      }
    }

    if (accessToken) {
      request.headers.set("Authorization", `Bearer ${accessToken}`)
    }

    const isPublicDynamicRoute = publicDynamicRouteRegex.some((regex) =>
      regex.test(pathname)
    )

    if (isPublicDynamicRoute) {
      // Allow access to dynamic public routes
      return middleware(request, event, response)
    }

    // Check if the current route is public
    const isPublicRoute = publicRoutes.some((path) => pathname.startsWith(path))

    if (isPublicRoute || pathname === "/") {
      //  For public routes, we don't need to do anything
      return middleware(request, event, response)
    }

    // Redirect unauthenticated users trying to access private routes
    if (!isAuthenticated) {
      //  If a user tries to access a private route without being authenticated,
      //  redirect them to the home page
      url.searchParams.set("redirected", "true")

      return NextResponse.redirect(url)
    }

    return middleware(request, event, response)
  }
}
