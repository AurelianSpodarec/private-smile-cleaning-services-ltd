import Link from "next/link";
import { auth, signIn } from "@/auth";

import NavItem from "./NavItem";
import dataMenu from "../dataMenu";
import UserAvatar from "../../UserAvatar";
import Logo from "../Logo";

async function MenuDesktop() {
  const session = await auth()
  const isLogged = session?.user

  return (
    <nav className="fixed left-0 right-0 px-16 py-4 w-full flex items-center justify-between">
      <div className="flex items-center space-x-2">

        <Link href="/" className="px-2">
          <Logo />
          <span className="sr-only">Smile Cleaning</span>
        </Link>

        {!isLogged &&
          <div className="flex flex-wrap align-center items-center text-sm justify-center space-x-6 font-barlow font-semibold">
            {dataMenu.map((item) => {
              return <NavItem key={item.url} name={item.name} url={item.url} isActive={false} />
            })}
          </div>
        }

        {isLogged &&
          <NavItem className="pl-6" name="Manage Bookings" url="/account/bookings" />
        }
      </div>

      <div className="flex items-center align-center space-x-2">
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
              <button className="rounded-2xl inline-block px-4 py-2 font-sm">Login</button>
            </form>
          </>
        }
        <Link href="/schedule" className="hidden lg:flex items-center gap-1 nav-cta bg-black rounded-xl py-2 px-4 text-sm text-white font-semibold">Schedule a cleaner</Link>

        {isLogged &&
          <UserAvatar user={session?.user} />
        }
      </div>

    </nav>
  )
}

export default MenuDesktop;
