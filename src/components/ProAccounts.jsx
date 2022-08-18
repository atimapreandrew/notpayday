import React from "react";
import card from "../assets/card_6.webp";

const ProAccounts = () => {
  return (
    <section id="proaccts-section">
      <div className="flex bg-veryDarkBlue mx-6 px-8 mb-7 pt-7 font-dmsans rounded-3xl md:px-32 md:mx-32">
        <div className="flex flex-col mx-auto md:flex-row">
          <div className="flex flex-col my-auto text-white">
            <h3 className="text-xl font-bold pb-7">Pro accounts</h3>
            <h2 className="text-4xl font-bold pb-2 md:text-5xl">Create</h2>
            <h2 className="text-4xl font-bold pb-7 md:text-5xl">
              <span className="text-darkCyan">International</span> Accounts
            </h2>
            <p className="text-xl">
              Create and manage multiple foreign accounts{" "}
              <span className="rounded-xl bg-white font-bold px-3 mr-2 text-black">
                USD
              </span>{" "}
              <span className="rounded-xl bg-white font-bold px-3 mr-2 text-black">
                EUR
              </span>{" "}
              <span className="rounded-xl bg-white font-bold px-3 mr-2 text-black">
                GBP
              </span>{" "}
              <span className="rounded-xl bg-white font-bold px-3 mr-2 text-black">
                NGN
              </span>
            </p>
            <div className="pt-16 pb-16">
              <a
                href="#"
                className="bg-white text-base rounded px-5 py-3 text-black"
              >
                Download Payday
              </a>
            </div>
          </div>

          <div className="flex flex-col mx-auto w-3/5 md:pl-12 md:w-3/6 md:mt-7">
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
