'use server'

import { auth, signOut } from "@/auth";

export async function serverAuth() {
  const session = await auth();
  console.log("session", session)
  return session
  // return {
  //   isLogged: Boolean(session?.user),
  //   user: session?.user
  // };
};

export async function serverSignOut() {
  await signOut({ redirect: true });
}