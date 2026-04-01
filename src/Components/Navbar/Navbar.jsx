import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { TiThMenu } from "react-icons/ti";

const Navbar = ({ carts }) => {
  return (
    <div className="relative">
      <div className="navbar bg-base-100 shadow-sm fixed top-0 right-0 left-0 z-10">
        <div className="navbar-start lg:pl-30">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ><AiOutlineMenu className="text-xl text-[#4F39F6]" /></div>
            <ul
              
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 relative lg:pr-33">
          {carts.length === 0 ? (
            ""
          ) : (
            <span className="text-white bg-red-500 px-2 py-0.5 rounded-full text-[10px] absolute z-1 left-13 lg:left-59 -top-0.5 ">
              {carts.length}
            </span>
          )}

          <a className="flex justify-center items-center gap-3">
            <FiShoppingCart /> Login
          </a>
          <a className="btn btn-primary rounded-4xl">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
