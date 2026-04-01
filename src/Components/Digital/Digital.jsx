import React, { use, useState } from "react";

import Box from "../Box/Box";
import Cart from "../ui/Cart";

const Digital = ({ getPromise, carts, setCarts }) => {
  const tools = use(getPromise);

  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="my-32 max-w-7xl mx-auto px-6">
      <div className="head-section text-center space-y-5 mb-10">
        <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box mx-auto justify-center bg-transparent w-[180px] border border-gray-100 rounded-full ">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-[70px] ${activeTab === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn text-black"}`}
            aria-label="Products"
            onClick={() => setActiveTab("Products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-[70px] ${activeTab === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn text-black"}`}
            aria-label={`Cart(${carts.length})`}
            onClick={() => setActiveTab("Cart")}
          />
        </div>

        {}
      </div>

      {activeTab === "Products" && (
        <Box carts={carts} setCarts={setCarts} tools={tools}></Box>
      )}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    </div>
  );
};

export default Digital;
