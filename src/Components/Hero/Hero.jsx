import React from "react";
import heroImg from "../../assets/images/banner.png";
import pointImg from "../../assets/images/Group 5.png"
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 my-24 max-w-7xl mx-auto px-6">
      <div className="hero-left space-y-5">
        <span className="p-2 lg:p-3 bg-[#4F39F620] flex justify-center items-center gap-1 rounded-4xl w-[290px] lg:w-[300px] text-[#4F39F6]">
          <img className="w-4 h-auto" src={pointImg} alt="" />
          <p className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">New: AI-Powered Tools Available</p>
        </span>
        <h1 className="font-extrabold text-5xl lg:text-7xl">Supercharge Your Digital Workflow</h1>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-2 pl-5">
          <button className="btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Explore Products</button>
          <button className="btn rounded-4xl btn-outline btn-primary"><IoPlayOutline className="text-lg" /><p className="text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]"> Watch Demo</p></button>
        </div>
      </div>
      <div className="hero-right">
        <img className="w-[300px] lg:w-[500px]" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
