import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

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

export default function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isPublicDynamicRoute = publicDynamicRouteRegex.some((regex) =>
    regex.test(pathname)
  )

  if (isPublicDynamicRoute) {
    // Allow access to dynamic public routes
    return NextResponse.next()
  }

  // Check if the current route is public
  const isPublicRoute = publicRoutes.some((path) => pathname.startsWith(path))

  if (isPublicRoute || pathname === "/") {
    //  For public routes, we don't need to do anything
    return NextResponse.next()
  }

  const isAuthRoute = authRoutes.some((path) => pathname.startsWith(path))

  const isAuthenticated = req.cookies.get("access-token")?.value

  if (!isAuthenticated) {
    //  If user tries to access a private route without being authenticated,
    //  redirect them to the home page
    return NextResponse.redirect(new URL("/", req.nextUrl.origin))
  }

  if (isAuthenticated && isAuthRoute) {
    //  If user tries to access a auth route while being authenticated,
    //  redirect them to the home page and open login dialog
    return NextResponse.redirect(new URL("/", req.nextUrl.origin))
  }

  // Allow access to authenticated users for private routes
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
