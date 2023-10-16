import Logo from "../../components/Logo";
import NavBar from "../../components/Nav_Bar";
function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 pt-[36px] md:pt-[25px]">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
