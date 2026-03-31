import React from "react";

const Rating = () => {
  return (
    <div className="bg-[#4F39F6] py-16">
     <div className="max-w-7xl mx-auto px-6">
       <div className="flex justify-center items-center gap-16 text-white">
        <div className="space-y-3">
          <h1 className="text-7xl font-bold">50K+</h1>
          <p className="text-xl">Active Users</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="space-y-3">
          <h1 className="text-7xl font-bold">200K+</h1>
          <p className="text-xl">Premium Tools</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="space-y-3">
          <h1 className="text-7xl font-bold">4.9</h1>
          <p className="text-xl">Rating</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Rating;
