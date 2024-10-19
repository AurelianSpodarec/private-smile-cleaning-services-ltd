export interface IMenuItem {
  name: string
  url: string
  isActive?: boolean
  className?: string
}

export const dataMenu: IMenuItem[] = [
  {
    name: "How it works",
    url: "#how-it-works"
  },
  {
    name: "Services",
    url: "#services",
  },
  {
    name: "Pricing",
    url: "#pricing",
  }
]

export const dataMenuGlobal: IMenuItem[] = [
  {
    name: "Blog",
    url: "/blog"
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Careers",
    url: "/careers"
  },
  {
    name: "Contact",
    url: "/contact",
  },
]
