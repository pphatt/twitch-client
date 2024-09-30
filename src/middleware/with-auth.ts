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

export let accessTokenContext: string | undefined

export function withAuth(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const pathname = request.nextUrl.pathname
    const accessToken = request.cookies.get("access-token")?.value
    const refreshToken = request.cookies.get("refresh-token")?.value

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
          } catch (_) {
            response.cookies.delete("access-token")
            response.cookies.delete("refresh-token")
          }
        } else {
          response.cookies.delete("access-token")
          response.cookies.delete("refresh-token")
        }
      }
    } else {
      if (refreshToken) {
        response = await refreshAccessToken(response, headers, refreshToken)
      } else {
        response.cookies.delete("access-token")
        response.cookies.delete("refresh-token")
      }
    }

    accessTokenContext = accessToken
    console.log("accessTokenContext")
    console.log(accessTokenContext)

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
      //  If user tries to access a private route without being authenticated,
      //  redirect them to the home page
      return NextResponse.redirect(new URL("/", request.url))
    }

    if (isAuthenticated && isAuthRoute) {
      //  If user tries to access a auth route while being authenticated,
      //  redirect them to the home page and open login dialog
      return NextResponse.redirect(new URL("/", request.url))
    }

    return middleware(request, event, response)
  }
}
