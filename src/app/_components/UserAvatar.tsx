'use client'

import React from "react";
import Link from "next/link";
import {
  DropdownMenuDefault,
  DropdownMenuDefaultContent,
  DropdownMenuDefaultItem,
  DropdownMenuDefaultLabel,
  DropdownMenuDefaultSeparator,
  DropdownMenuDefaultTrigger,
} from "@/components/molecules/DropdownMenu";
import { IUser } from "@/interfaces/IUser";
import { serverSignOut } from "./Header/MenuDesktop/actionAuth";

function UserAvatar({ user }: { user: IUser }) {
  const nameInitials = `${user.first_name.charAt(0)} ${user.last_name.charAt(0)}`;
  return (
    <div>
      <DropdownMenuDefault>
        <DropdownMenuDefaultTrigger>
          <div className="flex items-center space-x-2 bg-white/40 backdrop-blur-lg border border-gray-200 rounded-2xl p-1 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentcolor"
              strokeWidth="3"
              display="block"
              overflow="visible"
              viewBox="0 0 32 32"
              style={{ height: 16, width: 16 }}
            >
              <path d="M2 16h28M2 24h28M2 8h28"></path>
            </svg>
            {/* <img
              className="rounded-full h-8 w-8"
              src="https://a0.muscache.com/im/pictures/user/5c28f35d-02a0-48e8-bbf8-f44400d1db56.jpg?im_w=720"
              alt={`${user.first_name} ${user.last_name}`}
            /> */}
            <div className="border border-gray-300 text-sm bg-gray-200 flex items-center justify-center font-semibold align-center rounded-full h-8 w-8">
              {nameInitials}
            </div>
          </div>
        </DropdownMenuDefaultTrigger>

        <DropdownMenuDefaultContent>

          <div className="flex flex-col p-2">
            <span className="font-semibold">{user.first_name} {user.last_name}</span>
            <span className="text-sm">{user.email}</span>
          </div>

          <DropdownMenuDefaultSeparator />

          <DropdownMenuDefaultItem>
            <Link href="/account/bookings">
              Manage Bookings
            </Link>
          </DropdownMenuDefaultItem>

          <DropdownMenuDefaultItem>
            <form
              action={serverSignOut}
              className="flex items-center justify-between w-full"
            >
              <button>Logout</button>
              <svg
                width="16"
                height="16"
                strokeLinejoin="round"
                color="currentcolor"
                data-testid="geist-icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2.5 13.5h4.25V15H2a1 1 0 01-1-1V2a1 1 0 011-1h4.75v1.5H2.5v11zm9.94-6.25l-1.97-1.97-.53-.53L11 3.69l.53.53 3.074 3.073a1 1 0 010 1.414L11.53 11.78l-.53.53-1.06-1.06.53-.53 1.97-1.97H5v-1.5h7.44z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </form>
          </DropdownMenuDefaultItem>

          <DropdownMenuDefaultSeparator />

          <DropdownMenuDefaultItem>
            <Link href="" className="w-full block bg-black text-white py-2 px-2 text-sm rounded text-center">
              Schedule A Cleaner
            </Link>
          </DropdownMenuDefaultItem>

        </DropdownMenuDefaultContent>
      </DropdownMenuDefault>
    </div>
  );
}

export default UserAvatar;
