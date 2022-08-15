import React from "react";
import SendImg from "../assets/send.webp";
import SpendImg from "../assets/spend.webp";
import BankImg from "../assets/bank.webp";
import InvestImg from "../assets/invest.webp";

const Features = () => {
  return (
    <section id="features-section">
      <div className="flex flex-col font-dmsans px-2 py-16 md:flex-row md:px-32 md:py-28">
        <div className="flex flex-row text-center">
          <div className="px-5 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={SendImg} alt="" />
            <h2 className="pt-5 text-3xl font-bold md:text-4xl">Send</h2>
            <p className="py-3 text-base md:text-xl">
              Send & receive money globally in seconds
            </p>
          </div>
          <div className="px-5 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={SpendImg} alt="" />
            <h2 className="pt-5 text-3xl font-bold md:text-4xl">Spend</h2>
            <p className="py-3 text-base md:text-xl">
              Virtual master card that fits your digital life.
            </p>
          </div>
        </div>

        <div className="flex flex-row text-center">
          <div className="px-5 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={BankImg} alt="" />
            <h2 className="pt-5 text-3xl font-bold md:text-4xl">Bank</h2>
            <p className="py-3 text-base md:text-xl">
              Own multiple international accounts.
            </p>
          </div>
          <div className="px-5 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={InvestImg} alt="" />
            <h2 className="pt-5 text-3xl font-bold md:text-4xl">Invest</h2>
            <p className="py-3 text-base md:text-xl">
              Buy crypto with as little as $1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
