import ImageComponent from "next/image";
import LinkComponent from "next/link";
import { useState, useEffect } from "react";
import { scrollToSection } from "@/utils/scroll";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const [currentWindowWidth, setCurrentWindowWidth] = useState<number | null>(
    null
  );

  useEffect(() => {
    setCurrentWindowWidth(window.innerWidth);

    const handleResize = () => {
      setCurrentWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (currentWindowWidth && currentWindowWidth >= 768) {
      setIsMenuOpen(true);
      setIsMobileDevice(false);
    }

    if (currentWindowWidth && currentWindowWidth < 768) {
      setIsMenuOpen(false);
      setIsMobileDevice(true);
    }
  }, [currentWindowWidth]);

  useEffect(() => {
    if (isMobileDevice && isMenuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }

    if (isMobileDevice && !isMenuOpen) {
      document.body.style.overflow = "visible";
      return;
    }
  }, [isMobileDevice, isMenuOpen]);

  const toggleMobileMenu = () => {
    if (isMobileDevice) {
      setIsMenuOpen((prevState) => !prevState);
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isMobileDevice) {
      setIsMenuOpen(false);
    }

    scrollToSection(e.currentTarget.innerHTML.toLowerCase());
  };

  return (
    <header className="relative z-20 bg-header-gradient">
      <div
        className="px-5 py-9 mx-auto max-w-screen-lg-mob relative flex justify-between items-center
                tab:px-8 tab:pt-[25px] tab:pb-[66px] tab:w-[768px] tab:max-w-screen-tab
                desk:pl-6 desk:pr-[21px] desk:w-[1280px] desk:max-w-screen-desk"
      >
        {/* logo */}
        <LinkComponent href={"/"}>
          <ImageComponent
            width={61}
            height={22}
            src="/icons/logo.svg"
            alt="Main Logo"
          />
        </LinkComponent>

        {/* mob menu button */}
        <button
          type="button"
          className="text-sm font-normal tracking-[1.4px] uppercase text-white tab:hidden"
          onClick={toggleMobileMenu}
        >
          Menu
        </button>

        {/* navigation */}
        <HeaderNav
          menuOpen={isMenuOpen}
          handleNavLinkClick={handleNavLinkClick}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
