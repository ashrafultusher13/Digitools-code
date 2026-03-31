import React from 'react';
import Cart from '../ui/Cart';

const Digital = () => {
  return (
    <div className='my-32'>
      <div className='head-section text-center space-y-5 mb-10'>
        <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
        <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        <div>
          <button className='btn btn-primary rounded-3xl'>Products</button>
          <button className='btn rounded-3xl'>Cart</button>
        </div>
      </div>
      <div className='cart-section grid grid-cols-3 gap-9'>
      <Cart></Cart>
      <Cart></Cart>
      <Cart></Cart>
      <Cart></Cart>
      <Cart></Cart>
      <Cart></Cart>
      </div>
    </div>
  );
};

export default Digital;