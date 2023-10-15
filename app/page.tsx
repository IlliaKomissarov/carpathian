import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../sections/Header/Header"));
const Logo = dynamic(() => import("../components/Logo"));
const NavBar = dynamic(() => import("../components/Nav_Bar"));

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
