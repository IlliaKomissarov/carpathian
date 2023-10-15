import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../sections/Header/Header"));
const Logo = dynamic(() => import("../components/Logo"));

export default function Home() {
  return (
    <div>
      <Logo />
      <Header />
    </div>
  );
}
