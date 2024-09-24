import Link from "next/link";
import Image from "next/image";

import dataMenu, { IMenuItem } from "./dataMenu";
import { auth, signIn, signOut } from "@/auth";

import UserAvatar from "../UserAvatar";
import { IUser } from "@/interfaces/IUser";
import Logo from "./Logo";

const userMenu = [
  {
    name: "My Account",
    displayUI: false,
    group: [
      {
        name: "Profile",
        slug: "/account"
      },
      {
        name: "Billing",
        slug: "/billing"
      },
      {
        name: "Subscription",
        slug: "/subscription"
      }
    ]
  },
  {
    name: "Logout",
    // onAction: async () => await authLogout()
  }
]

function NavItem({ name, url, isActive }: IMenuItem) {
  return (
    <Link href={url}>{name}</Link>
  )
}

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

        <div className="flex flex-wrap align-center items-center text-sm justify-center space-x-6 font-barlow font-semibold">
          {dataMenu.map((item) => {
            return <NavItem key={item.url} name={item.name} url={item.url} isActive={false} />
          })}
        </div>
      </div>
      <div className="flex items-center align-center space-x-2">
        {!isLogged &&
          <>
            <Link href="/" className="border border-black rounded-2xl px-4 py-2 font-sm text-white">Sign Up</Link>
            <form
              action={async () => {
                'use server'
                await signIn('credentials', {
                  email: "smile.cleaning.101+cust1@gmail.com",
                  password: "Digital09%",
                })
              }}
            >
              <button className="bg-black rounded-2xl inline-block px-4 py-2 font-sm">Login</button>
            </form>
          </>
        }
        <Link href="/schedule" className="hidden lg:flex items-center gap-1 nav-cta bg-black rounded-xl py-2 px-4 text-sm text-white font-semibold">Schedule a cleaner</Link>

        {isLogged &&
          <UserAvatar menu={userMenu} email={session?.user?.first_name} avatar="https://media.licdn.com/dms/image/v2/D4D03AQE8vC6NMPCXyA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710696258127?e=2147483647&v=beta&t=wxyY2sBkviJSZMo5q9llLtYVi5VM9SaFVgE9A-5DMHA" />
        }

        {isLogged &&
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <button>Sign Out</button>
          </form>
        }
      </div>

    </nav>
  )
}

export default MenuDesktop;
