import React from "react";
import card from "../assets/card_6.webp";

const ProAccounts = () => {
  return (
    <section id="proaccts-section">
      <div className="flex bg-veryDarkBlue mx-4 px-8 mb-7 pt-7 font-dmsans antialiased rounded-3xl md:px-32 md:mx-32">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col my-auto text-white">
            <h3 className="text-lg font-bold pb-7 md:text-xl">Pro accounts</h3>
            <h2 className="text-3xl font-bold pb-2 md:text-5xl">Create</h2>
            <h2 className="text-3xl font-bold pb-7 md:text-5xl">
              <span className="text-darkCyan">International</span> Accounts
            </h2>
            <p className="text-xl">
              Create and manage multiple foreign accounts{" "}
              <span className="rounded-xl text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                USD
              </span>{" "}
              <span className="rounded-xl text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                EUR
              </span>{" "}
              <span className="rounded-xl text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                GBP
              </span>{" "}
              <span className="rounded-xl text-base bg-white font-bold px-3 mr-2 text-black md:text-xl">
                NGN
              </span>
            </p>
            <div className="pt-16 pb-16">
              <a
                href="#"
                className="bg-white text-sm rounded px-5 py-3 text-black md:text-base"
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
