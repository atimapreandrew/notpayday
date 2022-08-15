import React from "react";
import SendImg from "../assets/send.webp";
import SpendImg from "../assets/spend.webp";
import BankImg from "../assets/bank.webp";
import InvestImg from "../assets/invest.webp";

const Features = () => {
  return (
    <section id="features-section">
      <div className="flex flex-col font-dmsans px-2 py-20 mx-auto md:flex-row md:px-24 md:py-32">
        <div className="flex flex-row text-center">
          <div className="px-10">
            <img className="w-3/4" src={SendImg} alt="" />
            <h2 className="pt-5 text-4xl font-bold">Send</h2>
            <p className="py-3 text-xl">
              Send & receive money globally in seconds
            </p>
          </div>
          <div className="px-10">
            <img className="w-3/4" src={SpendImg} alt="" />
            <h2 className="pt-5 text-4xl font-bold">Spend</h2>
            <p className="py-3 text-xl">
              Virtual master card that fits your digital life.
            </p>
          </div>
        </div>

        <div className="flex flex-row text-center">
          <div className="px-10">
            <img className="w-3/4" src={BankImg} alt="" />
            <h2 className="pt-5 text-4xl font-bold">Bank</h2>
            <p className="py-3 text-xl">Own multiple international accounts.</p>
          </div>
          <div className="px-10">
            <img className="w-3/4" src={InvestImg} alt="" />
            <h2 className="pt-5 text-4xl font-bold">Invest</h2>
            <p className="py-3 text-xl">Buy crypto with as little as $1.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
