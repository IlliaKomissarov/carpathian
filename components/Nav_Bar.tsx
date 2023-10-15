"use client";

import { useEffect, useState } from "react";

import data from "@/data/buttons_text.json";
import Navigation from "./Navigation";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { menu, close } = data;

  const handleToggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleCloseMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const mobileMenuClasses = `
    xs:absolute xs:z-20 xs:bg-bgMobile/75 xs:backdrop-blur-[25px]
    ${
      mobileMenuOpen
        ? "xs:disable-scroll xs:fixed xs:left-0 xs:top-0 xs:w-screen xs:min-h-screen"
        : "xs:static xs:hidden"
    }
  `;

  return (
    <div>
      <button
        className="uppercase md:hidden"
        type="button"
        onClick={handleToggleMobileMenu}
      >
        {menu}
      </button>
      <div className={mobileMenuClasses}>
        <div className="relative flex flex-col items-center justify-center xs:w-full xs:h-screen">
          <button
            className="uppercase absolute top-0 right-0 mt-[43px] mr-[20px] md:hidden"
            type="button"
            onClick={handleCloseMobileMenu}
          >
            {close}
          </button>
          <Navigation onClick={handleCloseMobileMenu} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
