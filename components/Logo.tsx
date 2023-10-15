import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div className=" duration-300 hover:opacity-60 focus:opacity-60 cursor-pointer">
      <Link href="/">
        <Image src="/icons/logo.svg" width={61} height={33} alt="Logo" />
      </Link>
    </div>
  );
}


export default Logo;


