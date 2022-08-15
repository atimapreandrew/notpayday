import React from "react";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <header id="header-section">
      <nav className="relative mx-auto p-5 px-7 md:px-32">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <img src={logo} alt="Notpayday Logo" />
          </div>
          <div className="hidden space-x-12 md:flex font-opensans text-lg place-items-center text-white">
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
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
