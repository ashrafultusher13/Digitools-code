import React from 'react';
import Products from "../ui/Products";

const Box = ({tools, carts, setCarts}) => {
  return (
    <div>
      <div className="card-box-section grid grid-cols-1 lg:grid-cols-3 gap-9">
        {tools.map((tool, index) => (
          <Products carts={carts} setCarts={setCarts} key={index} tool={tool}></Products>
        ))}
      </div>
    </div>
  );
};

export default Box;