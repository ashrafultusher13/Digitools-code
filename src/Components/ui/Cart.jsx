import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);
  const handleCheckout = () => {
    setCarts([]);
    {
      carts.length === 0
        ? toast.error("Your cart is empty")
        : toast.success("Payment Successfull");
    }
  };
  const handleDelete = (item) => {
    const filteredArr = carts.filter((itm) => itm.id !== item.id);
    setCarts(filteredArr);
    toast.warning("Product is removed from cart");
  };
  return (
    <div className="border border-gray-200 rounded-3xl p-10 space-y-5">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {carts.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-3 text-[#62738280]">
          <FiShoppingCart className="text-5xl" />
          <p className="font-semibold">Your cart is empty</p>
        </div>
      ) : (
        <div className="items-section space-y-5">
          {carts.map((item) => (
            <div className="item flex justify-between items-center bg-base-200 p-5 rounded-xl">
              <div className="flex items-center gap-5">
                <div>
                  <img
                    className="border rounded-full p-2 border-gray-300 w-[75px]"
                    src={item.icon}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-[#627382]">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item)}
                className="btn text-[#FF3980] bg-transparent"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-[#627382]">Total:</p>
        <h2 className="text-2xl font-bold">${totalPrice}</h2>
      </div>
      <button
        onClick={handleCheckout}
        className="btn btn-primary rounded-3xl w-full"
      >
        Procced To Checkout
      </button>
    </div>
  );
};

export default Cart;
