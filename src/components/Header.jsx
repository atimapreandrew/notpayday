import React from "react";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <header id="header-section">
      <nav className="relative container mx-auto p-7 px-8 md:px-24">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <img src={logo} alt="Notpayday Logo" />
          </div>
          <div className="hidden space-x-12 md:flex font-dmsans text-lg place-items-center text-white">
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
            <a href="#" className="bg-white rounded-md px-3 py-2 text-black">
              TalentPay
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
