import { TiTick } from "react-icons/ti";
import { useState } from "react";

const Products = ({ tool, carts, setCarts }) => {
  const { name, description, price, period, tagtype, features, icon } = tool;

  const [isAdded, setIsAdded] = useState(false);

  const handleButton = () => {
    setIsAdded(true);
    setCarts([...carts, tool]);
  };
  return (
    <div>
      <div className="cart border border-gray-400 rounded-xl text-start space-y-5 p-5 relative hover:bg-gray-100 shadow-lg">
        <p className="absolute left-70 top-2 text-center text-sm bg-amber-100 text-amber-500 p-2 rounded-3xl w-[90px]">
          {tagtype}
        </p>
        <div>
          <img
            className="border rounded-full p-2 border-gray-300 w-[75px]"
            src={icon}
            alt=""
          />
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-[#627382]">{description}</p>
        <div className="flex justify-start items-center ">
          <p className="text-2xl font-bold">${price}</p>{" "}
          <p className="text-[#627382]">/{period}</p>
        </div>
        <div>
          <p className="flex justify-start items-center">
            <TiTick className="text-green-500"></TiTick>
            {features[0]}
          </p>
          <p className="flex justify-start items-center">
            <TiTick className="text-green-500"></TiTick>
            {features[1]}
          </p>
          <p className="flex justify-start items-center">
            <TiTick className="text-green-500"></TiTick>
            {features[2]}
          </p>
        </div>
        <button
          onClick={handleButton}
          className="btn btn-primary rounded-3xl w-full"
        >
          {isAdded ? `Added To Cart` : `Buy Now`}
        </button>
      </div>
    </div>
  );
};

export default Products;
