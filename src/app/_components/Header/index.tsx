import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

import Container from "@/components/_layout/Container";

function Header() {
  return (
    <header className="bg-[#f5eee7] z-40 relative">
      <Container>
        <MenuDesktop />
        <MenuMobile />
      </Container>
    </header>
  )
}

export default Header;
