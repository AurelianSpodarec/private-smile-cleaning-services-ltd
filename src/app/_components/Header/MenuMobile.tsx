import Link from "next/link";
import Logo from "./Logo";
import { auth, signIn } from "@/auth";
import dataMenu from "./dataMenu";
import NavItem from "./MenuDesktop/NavItem";
import UserAvatar from "../UserAvatar";

async function MenuMobile() {
  const session = await auth()
  const isLogged = session?.user

  return (
    <div className="lg:hidden flex items-center py-4 justify-between">
      <Link href="/" className="px-2">
        <Logo />
        <span className="sr-only">Smile Cleaning</span>
      </Link>

      <div className="flex items-center align-center space-x-3">
        {!isLogged &&
          <>
            <form
              action={async () => {
                'use server'
                await signIn('credentials', {
                  email: "smile.cleaning.101+cust1@gmail.com",
                  password: "Digital09%",
                })
              }}
            >
              <button className="inline-block px-6 py-3 text-sm font-semibold border border-gray-200 rounded-full">Login</button>
            </form>
          </>
        }
        <Link href="/schedule" className="hidden lg:flex items-center gap-1 nav-cta bg-[#96769f] rounded-3xl py-3 px-6 text-sm text-black font-semibold">Book a cleaner</Link>

        {isLogged &&
          <UserAvatar user={session?.user} />
        }
        </div>
    </div>
  )
}

export default MenuMobile
