export interface IMenuItem {
  name: string
  url: string
  isActive?: boolean
  className?: string
}

const dataMenu: IMenuItem[] = [
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

export default dataMenu;
