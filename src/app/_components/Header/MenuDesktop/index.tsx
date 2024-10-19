'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/Logo";

import NavItem from "./NavItem";
import UserAvatar from "../../UserAvatar";
import { dataMenu, dataMenuGlobal } from "../dataMenu";

function MenuDesktop({ session }) {
  const isLogged = session?.user

  const pathname = usePathname()
  const isHome = isLogged ? pathname === '/account' : pathname === '/';
  const isAccount = pathname.startsWith("/account");

  return (
    <nav className="hidden left-0 right-0 px-16 py-6 w-full lg:flex items-center justify-between">
      <div className="flex items-center space-x-8">

        <Link href="/" className="px-2">
          <Logo className="w-[100px]" />
          <span className="sr-only">Smile Cleaning</span>
        </Link>

        <div className="flex flex-wrap align-center items-center text-sm justify-center space-x-6 font-barlow font-semibold">
          {isHome && !isAccount && (
            dataMenu.map((item) => (
              <NavItem key={item.url} name={item.name} url={item.url} isActive={false} />
            ))
          )}

          {!isHome && !isAccount && (
            dataMenuGlobal.map((item) => (
              <NavItem key={item.url} name={item.name} url={item.url} isActive={false} />
            ))
          )}

        </div>

        {isLogged && isAccount &&
          <NavItem name="Manage Bookings" url="/account/bookings" />
        }
      </div>

      <div className="flex items-center align-center space-x-3">
        {!isLogged &&
          <Link href="/auth/login" className="inline-block px-6 py-3 text-sm font-semibold border border-gray-200 rounded-full">Login</Link>
        }
        <Link href="/schedule" className="hidden lg:flex items-center gap-1 nav-cta bg-[#96769f] rounded-3xl py-3 px-6 text-sm text-black font-semibold">Book a cleaner</Link>

        {isLogged &&
          <UserAvatar user={session?.user} />
        }
      </div>

    </nav>
  )
}

export default MenuDesktop;
