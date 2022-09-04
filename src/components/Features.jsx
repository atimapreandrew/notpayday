import React from "react";
import SendImg from "../assets/send.webp";
import SpendImg from "../assets/spend.webp";
import BankImg from "../assets/bank.webp";
import InvestImg from "../assets/invest.webp";

const Features = () => {
  return (
    <section id="features-section">
      <div className="flex flex-col mx-auto font-dmsans py-20 px-4 md:px-24 md:py-32 md:flex-row">
        <div className="flex flex-row text-center">
          <div className="px-4 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={SendImg} alt="" />
            <h2 className="pt-5 text-2xl font-bold md:text-3xl">Send</h2>
            <p className="py-3 text-sm md:px-4 md:text-lg">
              Send & receive money globally in seconds
            </p>
          </div>
          <div className="px-4 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={SpendImg} alt="" />
            <h2 className="pt-5 text-2xl font-bold md:text-3xl">Spend</h2>
            <p className="py-3 text-sm md:px-4 md:text-lg">
              Virtual master card that fits your digital life.
            </p>
          </div>
        </div>

        <div className="flex flex-row text-center">
          <div className="px-4 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={BankImg} alt="" />
            <h2 className="pt-5 text-2xl font-bold md:text-3xl">Bank</h2>
            <p className="py-3 text-sm md:px-4 md:text-lg">
              Own multiple international accounts.
            </p>
          </div>
          <div className="px-4 flex flex-col items-center">
            <img className="w-3/4 md:w-3/5" src={InvestImg} alt="" />
            <h2 className="pt-5 text-2xl font-bold md:text-3xl">Invest</h2>
            <p className="py-3 text-sm md:px-4 md:text-lg">
              Buy crypto with as little as $1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
