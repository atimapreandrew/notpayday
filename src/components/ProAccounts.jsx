import React from "react";
import card from "../assets/card_6.webp";

const ProAccounts = () => {
  return (
    <section id="proaccts-section">
      <div className="flex bg-veryDarkBlue mx-4 px-8 mb-7 pt-7 font-dmsans rounded-3xl md:px-32 md:mx-32">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col my-auto text-white">
            <h3 className="text-base font-bold pb-3 md:pb-7 md:text-xl">
              Pro accounts
            </h3>
            <h2 className="text-2xl font-bold md:text-5xl">Create</h2>
            <h2 className="text-2xl font-bold pb-3 md:pb-7 md:text-5xl">
              <span className="text-darkCyan">International</span> Accounts
            </h2>
            <p className="text-base md:text-xl">
              Create and manage multiple foreign accounts{" "}
              <span className="rounded-lg text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                USD
              </span>{" "}
              <span className="rounded-lg text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                EUR
              </span>{" "}
              <span className="rounded-lg text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                GBP
              </span>{" "}
              <span className="rounded-lg text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                NGN
              </span>
            </p>
            <div className="pt-10 pb-16 md:pt-16">
              <a
                href="#"
                className="bg-white text-base rounded px-5 py-3 text-black md:text-xl"
              >
                Download Payday
              </a>
            </div>
          </div>

          <div className="flex flex-col mx-auto w-4/5 md:pl-12 md:w-3/6 md:mt-7">
            <div>
              <img src={card} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProAccounts;
