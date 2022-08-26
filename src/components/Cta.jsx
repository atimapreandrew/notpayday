import React from "react";
import iosImg from "../assets/ios.svg";
import androidImg from "../assets/android.svg";

const Cta = () => {
  return (
    <section id="cta-section">
      <div className="flex flex-col bg-ctabg bg-no-repeat bg-cover mx-4 py-7 mb-7 rounded-3xl font-dmsans md:py-28 md:mx-32 md:flex-row">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="px-5 py-3 md:w-1/2 md:pl-28">
            <h1 className="text-white text-2xl font-extrabold md:text-4xl">
              What are you waiting for? Download the Payday app & get started
              now!
            </h1>
          </div>
          <div className="flex py-7 px-5 space-x-2 md:space-x-7 md:absolute md:right-60">
            <a href="#">
              <img className="w-48" src={iosImg} alt="iOS App Download" />
            </a>
            <a href="">
              <img
                className="w-48"
                src={androidImg}
                alt="Android App Download"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
