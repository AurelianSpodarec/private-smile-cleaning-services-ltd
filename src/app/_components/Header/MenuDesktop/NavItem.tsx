import Link from "next/link"
import { IMenuItem } from "../dataMenu"

function NavItem({ name, url, className, isActive }: IMenuItem) {
  return (
    <Link href={url} className={className}>{name}</Link>
  )
}

export default NavItem
