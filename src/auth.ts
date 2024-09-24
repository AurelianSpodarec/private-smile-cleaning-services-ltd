import NextAuth, { NextAuthResult } from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { authLogin } from "./services/apis/launch27/requests/auth"
import { IAuth } from "./interfaces/IAuth"
import { IUser } from "./interfaces/IUser"

declare module "next-auth" {
  interface User extends IUser {

  }
  interface Session {
    user: IUser
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // @ts-ignore
      authorize: async (credentials, req) => {
        const { email, password } = credentials as IAuth;
        const res = await authLogin({ email, password });

        if (!res) {
          throw new Error("User not found.")
        }

        const { bearer, ...user } = res;

        return {
          user: {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
          } as Omit<IUser, 'name'>,
          token: bearer,
        };
      },
    }),
  ],
  callbacks: {
    async session({ token, session, user }) {
      if (session.user) {
        // @ts-ignore
        session.user = token.user;
      }
      return session
    },
    async jwt({ token, user }) {
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
