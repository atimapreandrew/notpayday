import React from "react";
import card from "../assets/card_2.png";

const Card = () => {
  return (
    <section id="card-section">
      <div className="mx-4 bg-gray-50 font-dmsans rounded-3xl px-7 md:px-20 md:mx-36">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col text-black py-16 md:py-52">
            <h3 className="text-xl font-bold pb-7 md:tex-2xl">
              Shop on the go
            </h3>
            <h2 className="text-4xl font-bold pb-2 md:text-5xl">
              Mastercard for all your
            </h2>
            <h2 className="text-4xl font-bold pb-7 md:text-5xl">
              <span className="text-veryDarkCyan">online purchases</span>
            </h2>
            <p className="text-xl">
              Built for your digital life. Spend freely on millions of website
              globally.
            </p>
            <div className="pt-12">
              <a
                href="#"
                className="bg-black text-lg rounded px-7 py-4 text-white"
              >
                Download Payday
              </a>
            </div>
          </div>

          <div className="flex flex-col px-10 w-3/5 md:w-3/5 md:pt-20">
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
