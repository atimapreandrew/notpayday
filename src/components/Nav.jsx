import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navToggler = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

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

          <button onClick={navToggler} className="flex text-gray-300 md:hidden">
            <HiMenuAlt3 className="h-7 w-7" />
          </button>
        </div>
      </nav>

      <div className="fixed top-0 md:hidden">
        <div
          id="navMenu"
          className={`w-screen h-screen pt-10 flex-col items-center space-y-7 bg-gray-100 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-7 right-16"
          >
            <AiOutlineClose className="h-6 w-6" />
          </button>
          <a href="#" className="hover:text-gray-600">
            Products
          </a>
          <a href="#" className="hover:text-gray-600">
            About
          </a>
          <a href="#" className="hover:text-gray-600">
            FAQ
          </a>
          <a href="#" className="hover:text-gray-600">
            Blog
          </a>
          <a
            href="#"
            className="bg-veryDarkBlue rounded-md px-3 py-2 text-white"
          >
            Download App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
