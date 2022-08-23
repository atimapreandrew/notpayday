import React from "react";
import sendImg from "../assets/send-money.svg";
import paidImg from "../assets/paid.svg";

const SendGetPaid = () => {
  return (
    <section id="sendgetpaid-section">
      <div className="flex flex-col mx-4 mb-7 font-dmsans md:mx-32 md:flex-row">
        <div className="flex flex-col mb-7 bg-gray-50 rounded-2xl md:mb-14 md:mr-3 md:w-1/2">
          <div className="w-48 mx-auto pt-24">
            <img src={sendImg} alt="Send cash" />
          </div>
          <div className="mx-auto px-8 pt-16 md:px-16">
            <h1 className="text-3xl font-bold">
              Send cash to family & friends
            </h1>
            <p className="text-xl pt-5 pb-16">
              Who remembers long account numbers anymore? Just use the Payday
              $tag
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-veryDarkBlue rounded-2xl md:ml-3 md:w-1/2">
          <div className="w-48 mx-auto pt-24">
            <img src={paidImg} alt="" />
          </div>
          <div className="text-white px-8 mx-auto pt-16 md:px-16">
            <h1 className="text-4xl font-bold">
              Get paid by foreign employers
            </h1>
            <p className="text-xl pt-5 pb-14">
              Freelancer, remote worker or corporate employee? Get your payments
              in seconds!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendGetPaid;
