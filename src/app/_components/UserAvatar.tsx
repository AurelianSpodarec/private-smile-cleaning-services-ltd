import React from "react";
import Image from "next/image";

import {
  DropdownMenuDefault,
  DropdownMenuDefaultContent,
  DropdownMenuDefaultItem,
  DropdownMenuDefaultLabel,
  DropdownMenuDefaultSeparator,
  DropdownMenuDefaultTrigger,
} from "@/components/molecules/DropdownMenu"
import Link from "next/link";

function UserAvatar({ menu, email, avatar }) {
  return (
    <div>
      <DropdownMenuDefault>
        <DropdownMenuDefaultTrigger>
          <div className="flex items-center space-x-2">
            <span className="text-white">{email}</span>
            {/* <Image src={avatar} alt={email} width={30} height={30} className="rounded" /> */}
            <img className="rounded h-8 w-8" src="https://media.licdn.com/dms/image/v2/D4D03AQE8vC6NMPCXyA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710696258127?e=2147483647&v=beta&t=wxyY2sBkviJSZMo5q9llLtYVi5VM9SaFVgE9A-5DMHA" />
          </div>
        </DropdownMenuDefaultTrigger>

        <DropdownMenuDefaultContent>
          {menu.map((menuItem, index) => (
            <React.Fragment key={index}>
              {menuItem.group ? (
                <>
                  <DropdownMenuDefaultLabel>{menuItem.name}</DropdownMenuDefaultLabel>
                  <DropdownMenuDefaultSeparator />
                  {menuItem.group.map((groupItem, idx) => (
                    // <DropdownMenuDefaultItem key={idx} onClick={groupItem.onAction}>
                    <>
                      <Link href={groupItem?.slug}>

                        {groupItem.name}
                      </Link>
                    </>
                    // </DropdownMenuDefaultItem>
                  ))}
                  <DropdownMenuDefaultSeparator />
                </>
              ) : (
                <DropdownMenuDefaultItem onClick={menuItem.onAction}>
                  {menuItem.name}
                </DropdownMenuDefaultItem>
              )}
            </React.Fragment>
          ))}
        </DropdownMenuDefaultContent>
      </DropdownMenuDefault>
    </div>
  );
}

export default UserAvatar;