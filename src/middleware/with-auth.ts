import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server"
import type { CustomMiddleware } from "@/middleware/chain"
// import { createAuthHeaders } from "@/middleware/utils/create-auth-headers"
import { refreshAccessToken } from "@/middleware/utils/refresh-access-token"
import { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
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
  "/user/account-recovery",
  "/user/password-reset",
]

const authRoutes = ["/login", "/signup"]

const publicDynamicRouteRegex = [/^\/([^\/]+)$/, /^\/popout\/([^\/]+)$/] // ["/:username", "/popout/:username"]

const deleteCookies = (response: NextResponse) => {
  response.cookies.delete("access-token")
  response.cookies.delete("refresh-token")
  response.cookies.delete("profile")
}

export function withAuth(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const pathname = request.nextUrl.pathname
    let accessToken = request.cookies.get("access-token")?.value
    let refreshToken = request.cookies.get("refresh-token")?.value
    let profile = request.cookies.get("profile")?.value

    // const headers = createAuthHeaders(request.headers, {
    //   accessToken,
    //   refreshToken,
    // })

    if (accessToken) {
      const decoded = jwtDecode(accessToken)

      if (decoded.exp && decoded.exp < Date.now() / 1000) {
        if (refreshToken) {
          try {
            response = await refreshAccessToken(response, refreshToken)

            accessToken = response.cookies.get("access-token")!.value
            refreshToken = response.cookies.get("refresh-token")!.value
            profile = response.cookies.get("profile")!.value

            request.cookies.set("access-token", accessToken)
            request.cookies.set("refresh-token", refreshToken)
          } catch (_) {
            deleteCookies(response)

            accessToken = ""
            refreshToken = ""
            profile = ""

            const url = new URL(request.nextUrl.origin)
            url.searchParams.set("session-expired", "true")

            if (pathname !== "/") {
              // Prevent redirect loop by checking if already on home page
              url.pathname = "/"
              return NextResponse.redirect(url, { status: 302 })
            }

            return response // Already on home page; no further action
          }
        } else {
          deleteCookies(response)

          accessToken = ""
          refreshToken = ""
          profile = ""

          const url = new URL(request.nextUrl.origin)
          url.searchParams.set("session-expired", "true")

          if (pathname !== "/") {
            // Prevent redirect loop by checking if already on home page
            url.pathname = "/"
            return NextResponse.redirect(url, { status: 302 })
          }

          return response // Already on home page; no further action
        }
      }
    } else if (refreshToken) {
      try {
        // No access token, but we have a refresh token, so try refreshing
        response = await refreshAccessToken(response, refreshToken)

        accessToken = response.cookies.get("access-token")!.value
        refreshToken = response.cookies.get("refresh-token")!.value
        profile = response.cookies.get("profile")!.value

        request.cookies.set("access-token", accessToken)
        request.cookies.set("refresh-token", refreshToken)
      } catch (_) {
        deleteCookies(response)

        accessToken = ""
        refreshToken = ""
        profile = ""

        const url = new URL(request.nextUrl.origin)
        url.searchParams.set("session-expired", "true")

        if (pathname !== "/") {
          url.pathname = "/"
          return NextResponse.redirect(url, { status: 302 })
        }

        return response
      }
    }

    if (!accessToken && !refreshToken && profile) {
      deleteCookies(response)

      const url = new URL(request.nextUrl.origin)
      url.searchParams.set("session-expired", "true")

      if (pathname !== "/") {
        url.pathname = "/"
        return NextResponse.redirect(url, { status: 302 })
      }

      return response
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
      // NOTE: THIS IS FOR TEMPORARY TESTING BEHAVIOR OF MIDDLEWARE (CAN BE ROLLBACK LATER)
      return response
    }

    const isAuthRoute = authRoutes.some((path) => pathname.startsWith(path))
    const isAuthenticated = !!accessToken
    const url = new URL(request.nextUrl.origin)

    if (!isAuthenticated && isAuthRoute) {
      return middleware(request, event, response)
    }

    // Redirect unauthenticated users trying to access private routes
    if (!isAuthenticated) {
      //  If a user tries to access a private route without being authenticated,
      //  redirect them to the home page
      url.searchParams.set("redirected", "true")

      return NextResponse.redirect(url)
    }

    /*
     * CHECKING THIS EARLY DUE TO MANY REASONS AS THE FLOW BELOW (OLD):
     * - when navigate to the auth route when authenticated while atk expire will redirect you to the home page
     * - which is first when navigate to the authRoute it will refresh token first,
     *   and then it will redirect to home page BUT without the cookies or set-cookie on the header causing refresh again
     *   but with old rtf making user have to login again.
     *
     * NEW SOLUTION ONE CHECK THIS:
     * - https://www.google.com/search?q=next+response+redirect+not+getting+new+value+in+cookie+nextjs&sca_esv=a07f0383584960a3&ei=fRAyZ8ajH__R0-kPr-Sl0AQ&ved=0ahUKEwiG1vzgutSJAxX_6DQHHS9yCUoQ4dUDCA8&uact=5&oq=next+response+redirect+not+getting+new+value+in+cookie+nextjs&gs_lp=Egxnd3Mtd2l6LXNlcnAiPW5leHQgcmVzcG9uc2UgcmVkaXJlY3Qgbm90IGdldHRpbmcgbmV3IHZhbHVlIGluIGNvb2tpZSBuZXh0anNIlQpQkQNYhglwAXgAkAEAmAGiAaABuweqAQMxLje4AQPIAQD4AQGYAgegApYGwgIKEAAYsAMY1gQYR8ICBxAhGKABGArCAgUQIRifBcICBBAhGBWYAwCIBgGQBgiSBwMxLjagB8RL&sclient=gws-wiz-serp
     * - https://github.com/vercel/next.js/discussions/48434#discussioncomment-6336464
     * */
    if (isAuthenticated && isAuthRoute) {
      //  If a user tries to access an auth route while being authenticated,
      //  redirect them to the home page and open login dialog
      url.pathname = "/"

      const response = NextResponse.redirect(url, { status: 302 })

      if (accessToken) {
        response.cookies.set("access-token", accessToken)
      }

      if (refreshToken) {
        response.cookies.set("refresh-token", refreshToken)
      }

      return response
    }

    // dashboard authorization
    // Dashboard Authorization
    const decoded = jwtDecode<TokenPayload>(accessToken!)

    // Match "/u/{username}/" pattern
    const match = pathname.match(/^\/u\/([^\/]+)\//)

    if (match) {
      const usernameInUrl = match[1]

      // Compare username in URL with decoded username from JWT
      if (decoded.username !== usernameInUrl) {
        // Redirect to an unauthorized page or homepage if usernames don’t match
        url.pathname = "/"

        const response = NextResponse.redirect(url, { status: 302 })

        if (accessToken) {
          response.cookies.set("access-token", accessToken)
        }

        if (refreshToken) {
          response.cookies.set("refresh-token", refreshToken)
        }

        return response
      }
    }

    return middleware(request, event, response)
  }
}
