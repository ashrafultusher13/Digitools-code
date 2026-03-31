import React from "react";
import heroImg from "../../assets/images/banner.png";
import pointImg from "../../assets/images/Group 5.png"
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-10 my-24">
      <div className="hero-left space-y-5">
        <span className="p-3 bg-[#4F39F620] flex justify-center items-center gap-1 rounded-4xl w-[300px] text-[#4F39F6]">
          <img className="w-4 h-auto" src={pointImg} alt="" />
          New: AI-Powered Tools Available
        </span>
        <h1 className="font-extrabold text-7xl">Supercharge Your Digital Workflow</h1>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-2 pl-5">
          <button className="btn rounded-4xl bg-[#9514FA] text-white">Explore Products</button>
          <button className="btn rounded-4xl btn-outline btn-primary"><IoPlayOutline /> Watch Demo</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
