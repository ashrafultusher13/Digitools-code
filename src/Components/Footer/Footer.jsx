import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white pt-28 pb-10 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-5 gap-15">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold">DigiTools</h2>
          <p className="text-[#FFFFFF90]">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="space-y-3">
          <h4>Product</h4>
          <ul className="text-[#FFFFFF90] space-y-3">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4>Company</h4>
          <ul className="text-[#FFFFFF90] space-y-3">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4>Resources</h4>
          <ul className="text-[#FFFFFF90] space-y-3">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4>Social Links</h4>
          <div className="flex items-center gap-4 text-[#101727]">
            <div className="border bg-white p-2 rounded-2xl">
              <AiFillInstagram />
            </div>
            <div className="border bg-white p-2 rounded-2xl">
              <FaFacebookSquare />
            </div>
            <div className="border bg-white p-2 rounded-2xl">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between text-[#FAFAFA60]">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
