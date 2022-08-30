import React from "react";
import logo from "../assets/logo.webp";
import flutterwave from "../assets/flutterwave.svg";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import ca from "../assets/ca.png";
import us from "../assets/us.png";
import rw from "../assets/rw.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer-section">
      <div className="flex flex-col font-dmsans space-x-7 md:space-x-24 md:flex-row md:p-24">
        <div className="flex flex-col mx-10 py-16 md:pb-16 md:pt-0 md:mx-auto">
          <div className="flex flex-row place-items-center pb-5 space-x-3 md:pb-10">
            <a href="">
              <img className="w-24 md:w-28" src={logo} alt="" />
            </a>
            <p className="text-white">|</p>
            <a href="">
              <img className="w-24 md:w-28" src={flutterwave} alt="" />
            </a>
          </div>
          <p className="text-white text-sm md:text-lg">NotPayDay © {year}</p>
        </div>
        <div className="space-y-4 text-sm md:text-lg">
          <div className="flex flex-col text-white space-y-4 pb-5 md:pb-16">
            <h1 className="text-gray-300 font-bold">OUR PRODUCTS</h1>
            <a href="">Payday</a>
            <a href="">TalentPay</a>
          </div>
          <div className="flex flex-col text-white space-y-4 pb-16">
            <h1 className="text-gray-300 font-bold">CONTACT US</h1>
            <a href="mailto:support@usepayday.com">support@usepayday.com</a>
            <div className="flex space-x-5">
              <a href="" className="hover:text-gray-300">
                <BsTwitter />
              </a>
              <a href="" className="hover:text-gray-300">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-sm text-white pb-16 md:text-lg">
          <h1 className="text-gray-300 font-bold">COMPANY</h1>
          <a href="">About Us</a>
          <a href="">Ambassadors</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Careers</a>
          <a href="">Blog</a>
          <a href="">FAQ</a>
        </div>
        <div className="text-white space-y-4 text-sm pb-16 md:text-lg">
          <h1 className="text-gray-300 font-bold">LOCATIONS</h1>
          <p className="flex place-items-center">
            <img className="w-5 h-5 rounded-full mr-1" src={ca} alt="" />: 2800
            Park Place 666 Burrard St Vancouver
          </p>
          <p className="flex place-items-center">
            <img className="w-5 h-5 rounded-full mr-1" src={us} alt="" />: 256
            Chapman Road STE 105-4, New Castle, DE
          </p>
          <p className="flex place-items-center">
            <img className="w-5 h-5 rounded-full mr-1" src={rw} alt="" />:
            M.Peace Plaza, 5th Floor, Block B
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
