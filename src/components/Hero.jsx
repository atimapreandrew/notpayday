import React from "react";
import heroImage from "../assets/card-phone-green.png";
import AppStore from "../assets/app-store-white.svg";
import PlayStore from "../assets/play-store-white.svg";
import RatingsImg from "../assets/rated.png";
import Ratings from "../assets/ratings.svg";
import Rate from "../assets/rate.svg";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="container flex flex-row font-dmsans mx-auto p-7 px-8 md:pt-20 md:px-24">
        <div className="flex flex-col lg:w-1/2 md:space-y-5">
          <p className="text-black p-1.5 font-medium bg-slate-200 w-4/5 rounded-full truncate text-[12px] my-5 md:w-7/12">
            <span className="text-white bg-black rounded-full py-0.5 px-3">
              New
            </span>{" "}
            Announcing our $2M + pre-seed funding 🎉
          </p>
          <h1 className="text-white pt-8 text-4xl font-extrabold md:text-6xl">
            Open USD, EUR, & GBP Bank Accounts for free
          </h1>
          <h3 className="text-white text-lg py-7 md:py-4 md:leading-10 md:text-2xl">
            The Borderless Neobank for African remote workers, freelancers, and
            creatives.
          </h3>
          <div className="flex py-4 md:py-2">
            <a href="#" className="pr-4">
              <img src={AppStore} alt="AppStore Download" />
            </a>
            <a href="#">
              <img src={PlayStore} alt="PlayStore Download" />
            </a>
          </div>
          <div className="flex items-center md:pb-28">
            <div className="w-24 py-5 pr-2">
              <img src={RatingsImg} alt="Ratings" />
            </div>
            <div className="flex flex-col w-1/2">
              <div className="flex">
                <img className="w-3" src={Rate} alt="" />
                <img className="w-3" src={Rate} alt="" />
                <img className="w-3" src={Rate} alt="" />
                <img className="w-3" src={Rate} alt="" />
                <img className="w-3" src={Ratings} alt="" />
              </div>
              <p className="text-slate-700 pt-2 text-xs">
                Rated 4.5 by 30,000+ Africans
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-1 hidden flex-col w-7/12 lg:flex ">
          <div>
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
