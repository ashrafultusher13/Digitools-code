import React from "react";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="my-28 max-w-7xl mx-auto px-6">
      <div className="text-center space-y-5 mb-10">
        <h2 className="text-5xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="card-section grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="card border border-gray-200 rounded-xl bg-base-300 py-6 px-6 space-y-7 relative">
          <div>
            <h3 className="text-3xl font-extrabold">Starter</h3>
            <p className="text-[#627382]">Perfect for getting started</p>
          </div>
          <div>
            <div className="flex justify-baseline items-center ">
              <p className="text-4xl font-bold">$0</p>{" "}
              <p className="text-[#627382]">/MONTH</p>
            </div>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Access to 10 free tools
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Basic templates
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Community support
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />1 project per month
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Email Support
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />Limited Storage
            </p>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl w-80 mx-auto lg:right-7">
            Get Started Free
          </button>
        </div>
        <div className="card border border-gray-200 rounded-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-6 px-6 space-y-7 relative">
          <p className="absolute left-42 lg:left-35 -top-5 text-center text-sm bg-amber-100 text-amber-500 p-2 rounded-3xl w-[120px]">
            Most Popular
          </p>
          <div>
            <h3 className="text-3xl font-extrabold">Pro</h3>
            <p className="text-[#FFFFFF90]">Best for professionals</p>
          </div>
          <div>
            <div className="flex justify-baseline items-center">
              <p className="text-4xl font-bold">$29</p>{" "}
              <p className="text-[#FFFFFF90]">/MONTH</p>
            </div>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Access to all premium tools
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Unlimited templates
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Priority support
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Unlimited projects
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Cloud sync
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Advanced analytics
            </p>
          </div>
          <button className="btn rounded-3xl w-80 mx-auto text-[#9514FA]">
            Start Pro Trial
          </button>
        </div>
        <div className="card border border-gray-200 rounded-xl bg-base-300 py-6 px-6 space-y-7 relative text-[]">
          <div>
            <h3 className="text-3xl font-extrabold">Enterprise</h3>
            <p className="text-[#627382]">For teams and businesses</p>
          </div>
          <div>
            <div className="flex justify-baseline items-center ">
              <p className="text-4xl font-bold">$99</p>{" "}
              <p className="text-[#627382]">/MONTH</p>
            </div>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Everything in Pro
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Team collaboration
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Custom integrations
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Dedicated support
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              SLA guarantee
            </p>
            <p className="flex justify-start items-center">
              <TiTick className="text-green-500" />
              Custom branding
            </p>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl w-80 mx-auto lg:right-7">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
