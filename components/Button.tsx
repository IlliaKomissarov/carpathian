"use client";

import React from "react";
import { ReactElement } from "react";
import { Link } from "react-scroll";

function Button({ label }: { label: string }) {
  return (
    <Link
      className="btn relative w-full flex justify-center items-center text-[18px] lg:text-[32px] font-bold py-[14px] bg-white/5 duration-300 hover:bg-white/20 focus:bg-white/20 uppercase cursor-pointer"
      to="contacts"
      smooth={true}
      spy={true}
      hashSpy={true}
      duration={600}
      href="/"
      isDynamic={true}
    >
      <span>{label}</span>
    </Link>
  );
}

export default Button;