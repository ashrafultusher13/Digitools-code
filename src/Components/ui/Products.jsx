import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { toast } from "react-toastify";

const Products = ({ tool, carts, setCarts }) => {
  const { name, description, price, period, tagtype, features, icon, tag } =
    tool;

  const [isAdded, setIsAdded] = useState(false);

  const handleButton = () => {
    setIsAdded(true);
    if (carts.find((item) => item.id === tool.id)) {
      toast.error("Product is already added to cart");
      return;
    }
    setCarts([...carts, tool]);
    toast.success("Product is added to cart");
  };
  return (
    <div>
      <div className="cart border border-gray-400 rounded-xl text-start space-y-5 p-5 relative hover:bg-gray-100 shadow-lg">
        <p
          className={`absolute left-83 lg:left-70 top-2 text-center text-sm  ${tag === "bestseller" ? "bg-amber-100 text-amber-700" : tag === "popular" ? "text-[#9514FA] bg-base-300" : "text-green-700 bg-green-100"} p-2 rounded-3xl w-[90px]`}
        >
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
          className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl w-full"
        >
          {isAdded ? `Added To Cart` : `Buy Now`}
        </button>
      </div>
    </div>
  );
};

export default Products;
