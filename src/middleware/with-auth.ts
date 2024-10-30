import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server"
import type { CustomMiddleware } from "@/middleware/chain"
import { createAuthHeaders } from "@/middleware/utils/create-auth-headers"
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

const authRoutes = ["/login", "/signup"]

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

    const headers = createAuthHeaders(request.headers, {
      accessToken,
      refreshToken,
    })

    if (accessToken) {
      const decoded = jwtDecode(accessToken)

      if (decoded.exp && decoded.exp < Date.now() / 1000) {
        if (refreshToken) {
          try {
            response = await refreshAccessToken(response, headers, refreshToken)
            accessToken = response.cookies.get("access-token")!.value
            refreshToken = response.cookies.get("refresh-token")!.value
          } catch (_) {
            response.cookies.delete("access-token")
            response.cookies.delete("refresh-token")
          }
        }
      }
    } else if (refreshToken) {
      try {
        // No access token, but we have a refresh token, so try refreshing
        response = await refreshAccessToken(response, headers, refreshToken)
        accessToken = response.cookies.get("access-token")!.value
        refreshToken = response.cookies.get("refresh-token")!.value
      } catch (_) {
        response.cookies.delete("access-token")
        response.cookies.delete("refresh-token")
      }
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

    const isAuthRoute = authRoutes.some((path) => pathname.startsWith(path))

    const isAuthenticated = !!accessToken

    if (!isAuthenticated) {
      //  If a user tries to access a private route without being authenticated,
      //  redirect them to the home page
      const redirectUrl = new URL("/", request.url);
      redirectUrl.searchParams.set("redirected", "true");

      return NextResponse.redirect(redirectUrl)
    }

    if (isAuthenticated && isAuthRoute) {
      //  If a user tries to access an auth route while being authenticated,
      //  redirect them to the home page and open login dialog
      return NextResponse.redirect(new URL("/", request.url))
    }

    return middleware(request, event, response)
  }
}
