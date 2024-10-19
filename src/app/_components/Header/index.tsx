import MenuDesktop from "./MenuDesktop";
import { serverAuth } from "./MenuDesktop/actionAuth";
import MenuMobile from "./MenuMobile";

async function Header() {
  const session = await serverAuth();
  
  return (
    <header className="bg-white z-40 relative">
      <MenuDesktop session={session} />
      <MenuMobile />
    </header>
  )
}

export default Header;
