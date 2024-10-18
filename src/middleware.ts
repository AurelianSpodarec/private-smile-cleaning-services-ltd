import { NextRequest, NextResponse } from "next/server"
import { auth } from "./auth"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "./routes"

// export async function middleware (request: NextRequest) {
// const session = await auth()
//   if (!session?.user?.token) {
//     return NextResponse.redirect(new URL("/signin", request.url))
//   }
// }

export default auth((req: NextRequest) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.some(route => nextUrl.pathname.startsWith(route))
  // const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isRootRoute = nextUrl.pathname === "/";


   // If the user is logged in and is on the root route, redirect to /account
   if (isLoggedIn && isRootRoute) {
    return Response.redirect(new URL("/account", nextUrl));
  }

  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  //   }
  //   return null
  // }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl))
  }

})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
