import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

function Header() {
  return (
    <header className="bg-white z-40 relative">
      <MenuDesktop />
      <MenuMobile />
    </header>
  )
}

export default Header;
