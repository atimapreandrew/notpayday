import React from "react";
import card from "../assets/card_2.png";

const Card = () => {
  return (
    <section id="card-section">
      <div className="flex mx-4 px-8 mb-7 pt-7 bg-gray-50 font-dmsans rounded-3xl md:px-28 md:mx-32">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col my-auto text-black">
            <h3 className="text-base font-bold pb-3 md:pb-7 md:text-lg">
              Shop on the go
            </h3>
            <h2 className="text-2xl font-bold md:pb-2 md:text-4xl">
              Mastercard for all your
            </h2>
            <h2 className="text-2xl font-bold pb-3 md:pb-7 md:text-4xl">
              <span className="text-veryDarkCyan">online purchases</span>
            </h2>
            <p className="text-base md:text-lg">
              Built for your digital life. Spend freely on millions of website
              globally.
            </p>
            <div className="py-10 md:py-12">
              <a
                href="#"
                className="bg-black text-base rounded px-7 py-4 text-white"
              >
                Download Payday
              </a>
            </div>
          </div>

          <div className="flex flex-col md:pl-16 md:w-3/5 md:py-20">
            <div>
              <img src={card} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
