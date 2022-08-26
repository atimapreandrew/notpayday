import React from "react";
import cnbc from "../assets/cnbc.png";
import dm24 from "../assets/dm2.png";
import ptimes from "../assets/ptimes.png";
import vanguard from "../assets/vang.svg";
import guardian from "../assets/guard.png";
import yahoo_finance from "../assets/yahoo_finance.png";

const Featured = () => {
  return (
    <section id="featured-section">
      <div className="flex flex-col mx-4 py-7 mb-7 font-dmsans md:mx-32">
        <div className="mx-auto pt-10">
          <h1 className="text-2xl font-bold text-gray-700">As featured in</h1>
        </div>
        <div className="flex items-center justify-center p-5">
          <a href="#">
            <img
              className="w-4/6 grayscale grayscale-100 hover:grayscale-0"
              src={cnbc}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-4/6 grayscale grayscale-100 hover:grayscale-0"
              src={dm24}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-4/6 grayscale grayscale-100 hover:grayscale-0"
              src={ptimes}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-4/6 grayscale grayscale-100 hover:grayscale-0"
              src={vanguard}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-4/6 grayscale grayscale-100 hover:grayscale-0"
              src={guardian}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-4/6 grayscale grayscale-100 hover:grayscale-0"
              src={yahoo_finance}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
