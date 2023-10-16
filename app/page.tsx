import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../sections/Header/Header"));

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
