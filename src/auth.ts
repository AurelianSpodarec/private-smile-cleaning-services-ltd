import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// import { authLoginByEmail, refreshToken } from "./services/apis/requests/auth"
import { parseCookies } from "./lib/utils"
import { authLogin } from "./services/apis/launch27/requests/auth"
// import { jwtDecode } from "jwt-decode"

// function parseJwt (token) {
//   try {
//     return jwtDecode(token)
//   } catch (error) {
//     console.error("Failed to decode JWT", error)
//     return null
//   }
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        const { email, password } = credentials

        const res: any = await authLogin({
          email: "smile.cleaning.101+cust1@gmail.com",
          password: "Digital09%",
        })

        if (!res) {
          throw new Error("User not found.")
        }

        const { bearer, ...user } = res;
        const accessToken = bearer

        console.log("WOOOO############", user)
        return {
          token: accessToken,
          user: user
          // refresh: cookies,
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session, user }) {
      if(session.user) {
        session.user = token.user; 
      }
      return session
    },
    async jwt({ token, user }) {
      // const currentTime = Math.floor(Date.now() / 1000)
      // if (token?.exp && currentTime > token.exp) {
      // console.log("token expired", token, currentTime)
      // try {
      // const res = await refreshToken(token?.refresh)
      // const cookies = parseCookies(res.cookies)
      // const user = {
      //   token: res.accessToken,
      //   refresh: cookies.refresh
      // }

      return {
        ...token,
        ...user,
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  }
})
