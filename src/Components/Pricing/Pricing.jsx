import React from "react";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="my-28">
      <div className="text-center space-y-5 mb-10">
        <h2 className="text-5xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="card-section grid grid-cols-3 gap-10">
        <div className="card border border-gray-200 rounded-xl bg-base-300 py-6 px-6 space-y-7 relative">
          <div>
            <h3 className="text-3xl font-extrabold">Starter</h3>
            <p className="text-[#627382]">Perfect for getting started</p>
          </div>
          <div>
            <div className='flex justify-baseline items-center '>
                  <p className='text-4xl font-bold'>$0</p> <p className='text-[#627382]'>/MONTH</p>
                </div>
                <p className='flex justify-start items-center'><TiTick />Access to 10 free tools</p>
                <p className='flex justify-start items-center'><TiTick />Basic templates</p>
                <p className='flex justify-start items-center'><TiTick />Community support</p>
                <p className='flex justify-start items-center'><TiTick />1 project per month</p>
                
              
                
          </div>
          <button className='btn btn-primary rounded-3xl w-99 absolute bottom-5 right-12'>Get Started Free</button>
        </div>
        <div className="card border border-gray-200 rounded-xl bg-[#9514FA] text-white py-6 px-6 space-y-7 relative">
          <p className='absolute left-49 -top-5 text-center text-sm bg-amber-100 text-amber-500 p-2 rounded-3xl w-[120px]'>Most Popular</p>
          <div>
            <h3 className="text-3xl font-extrabold">Pro</h3>
            <p className="text-[#FFFFFF90]">Best for professionals</p>
          </div>
          <div>
            <div className='flex justify-baseline items-center'>
                  <p className='text-4xl font-bold'>$29</p> <p className='text-[#FFFFFF90]'>/MONTH</p>
                </div>
                <p className='flex justify-start items-center'><TiTick />Access to all premium tools</p>
                <p className='flex justify-start items-center'><TiTick />Unlimited templates</p>
                <p className='flex justify-start items-center'><TiTick />Priority support</p>
                <p className='flex justify-start items-center'><TiTick />Unlimited projects</p>
                <p className='flex justify-start items-center'><TiTick />Cloud sync</p>
                <p className='flex justify-start items-center'><TiTick />Advanced analytics</p>
               
           
                
          </div>
          <button className='btn rounded-3xl w-99 absolute bottom-5 right-12 text-[#9514FA]'>Start Pro Trial</button>
        </div>
        <div className="card border border-gray-200 rounded-xl bg-base-300 py-6 px-6 space-y-7 relative text-[]">
          <div>
            <h3 className="text-3xl font-extrabold">Enterprise</h3>
            <p className="text-[#627382]">For teams and businesses</p>
          </div>
          <div>
            <div className='flex justify-baseline items-center '>
                  <p className='text-4xl font-bold'>$99</p> <p className='text-[#627382]'>/MONTH</p>
                </div>
                <p className='flex justify-start items-center'><TiTick />Everything in Pro</p>
                <p className='flex justify-start items-center'><TiTick />Team collaboration</p>
                <p className='flex justify-start items-center'><TiTick />Custom integrations</p>
                <p className='flex justify-start items-center'><TiTick />Dedicated support</p>
                <p className='flex justify-start items-center'><TiTick />SLA guarantee</p>
                <p className='flex justify-start items-center'><TiTick />Custom branding</p>
               
                
          </div>
          <button className='btn btn-primary rounded-3xl w-99 absolute bottom-5 right-12'>Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
