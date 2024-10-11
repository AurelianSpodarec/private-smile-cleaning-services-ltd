import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// Reuse the dropdown UI
export function DropdownMenuDefault({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      {children}
    </DropdownMenu>
  )
}

export function DropdownMenuDefaultTrigger({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
  )
}

export function DropdownMenuDefaultContent({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuContent className="z-[9999px] bg-white rounded-dashboard-sidebar-dropdown-menu">
      {children}
    </DropdownMenuContent>
  )
}

export function DropdownMenuDefaultSeparator() {
  return (
    <DropdownMenuSeparator />
  )
}

export function DropdownMenuDefaultLabel({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuLabel >{children}</DropdownMenuLabel>
  )
}

export function DropdownMenuDefaultItem({ children, props }: { children: React.ReactNode }) {
  return (
    <DropdownMenuItem {...props} className="hover:bg-black hover:text-white rounded-dashboard-sidebar-link-border-radius">{children}</DropdownMenuItem>
  )
}
