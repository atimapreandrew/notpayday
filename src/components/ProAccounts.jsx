import React from "react";
import card from "../assets/card_6.webp";

const ProAccounts = () => {
  return (
    <section id="proaccts-section">
      <div className="mx-4 bg-veryDarkBlue font-dmsans rounded-xl px-7 md:px-20 md:mx-36">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col text-white py-16 md:py-52">
            <h3 className="text-xl font-bold pb-7 md:tex-2xl">Pro accounts</h3>
            <h2 className="text-4xl font-bold pb-2 md:text-5xl">Create</h2>
            <h2 className="text-4xl font-bold pb-7 md:text-5xl">
              <span className="text-darkCyan">International</span> Accounts
            </h2>
            <p className="text-xl">
              Create and manage multiple foreign accounts <span>USD</span>{" "}
              <span>EUR</span> <span>GBP</span> <span>NGN</span>
            </p>
            <div className="pt-10">
              <a
                href="#"
                className="bg-white text-base rounded px-5 py-3 text-black"
              >
                Download Payday
              </a>
            </div>
          </div>

          <div className="flex flex-col z-0 w-3/5 md:w-2/6 md:pt-20">
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
