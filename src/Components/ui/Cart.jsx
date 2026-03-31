import React from 'react';
import writingImg from "../../assets/products/writing_2327400 1.png"
import { TiTick } from "react-icons/ti";

const Cart = () => {
  return (
    <div>
      <div className='cart border border-gray-400 rounded-xl text-start space-y-5 p-5 relative hover:bg-gray-100'>
        <p className='absolute left-70 top-2 text-center text-sm bg-amber-100 text-amber-500 p-2 rounded-3xl w-[90px]'>Best Seller</p>
        <div>
          <img className='border rounded-full p-2 border-gray-300' src={writingImg} alt="" />
        </div>
    <h2 className='text-2xl font-bold'>AI Writing Pro</h2>
    <p className='text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
    <div className='flex justify-start items-center '>
      <p className='text-2xl font-bold'>$29</p> <p className='text-[#627382]'>/MO</p>
    </div>
    <p className='flex justify-start items-center'><TiTick />Features</p>
    <button className='btn btn-primary rounded-3xl w-full'>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;