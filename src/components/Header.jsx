import React from "react";
import logo from "../assets/logo.webp";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header id="header-section">
      <nav className="relative container font-dmsans mx-auto p-7 px-8 md:px-24">
        <div className="flex items-center justify-between">
          <div className="w-28 md:w-32">
            <img src={logo} alt="Notpayday Logo" />
          </div>
          <div className="hidden space-x-12 md:flex text-lg place-items-center text-white">
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
            <a
              href="#"
              className="bg-white rounded-md px-3 py-2 text-veryDarkBlue md:hover:-translate-y-[1px]"
            >
              Download App
            </a>
          </div>

          <button className="flex text-gray-300 md:hidden">
            <HiMenuAlt3 className="h-7 w-7" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
