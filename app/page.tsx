import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../sections/Header/Header"));
const Hero = dynamic(() => import("../sections/Hero/Hero"));

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
    </div>
  );
}
