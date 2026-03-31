import React from "react";
import userImg from "../../assets/images/user.png";
import rocketImg from "../../assets/images/rocket.png";
import packageImg from "../../assets/images/package.png";

const Steps = () => {
  return (
    <div className="bg-base-300 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-5 mb-10">
        <h2 className="text-5xl font-extrabold">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="card-section grid grid-cols-3 gap-4">
        <div className="card border border-gray-200 rounded-xl bg-base-100 space-y-3 py-20 px-6 text-center relative">
          <span className="text-white bg-[#9514FA] px-3 py-2 rounded-full text-sm absolute left-85 top-4 z-1">
            01
          </span>
          <img
            className="w-[100px] border border-gray-100 rounded-full p-3 bg-base-300 mx-auto"
            src={userImg}
            alt=""
          />
          <h3 className="font-bold text-2xl">Create Account</h3>
          <p className="text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="card border border-gray-200 rounded-xl bg-base-100 space-y-3 py-20 px-6 text-center relative">
          <span className="text-white bg-[#9514FA] px-3 py-2 rounded-full text-sm absolute left-85 top-4 z-1">
            02
          </span>
          <img
            className="w-[100px] border border-gray-100 rounded-full p-3 bg-base-300 mx-auto"
            src={packageImg}
            alt=""
          />
          <h3 className="font-bold text-2xl">Choose Products</h3>
          <p className="text-[#627382]">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="card border border-gray-200 rounded-xl bg-base-100 space-y-3 py-20 px-6 text-center relative">
          <span className="text-white bg-[#9514FA] px-3 py-2 rounded-full text-sm absolute left-85 top-4 z-1">
            03
          </span>
          <div className="border border-gray-100 rounded-full p-5 bg-base-300 mx-auto">
            <img className="w-[60px]" src={rocketImg} alt="" />
          </div>

          <h3 className="font-bold text-2xl">Start Creating</h3>
          <p className="text-[#627382]">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Steps;
