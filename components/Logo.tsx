import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div className=" duration-300 hover:opacity-60 focus:opacity-60 cursor-pointer">
      <Link href="/" aria-label="CarpTravel logo" passHref>
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={61}
          height={33}
        />
      </Link>
    </div>
  );
}

export default Logo;
