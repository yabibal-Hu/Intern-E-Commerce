import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import next from "/icon/next_black.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Item } from "./types";
import numeral from "numeral";

export default function CartPage() {
  const { cartItems, addItems, removeItem, minusQuantity } = useCart();
  const totalItems = Object.keys(cartItems);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const filtered = response.data.filter((item: Item) =>
          totalItems.includes(item.id.toString())
        );
        setFilteredItems(filtered);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [removeItem]);

  const navigate = useNavigate();
  const subtotal = filteredItems.reduce(
    (total, item) => total + item.price * (cartItems[item.id] || 0),
    0
  );

  const CurrencyFormater = ({ amount }: { amount: number }) => {
    const formattedAmount = numeral(amount).format("$0,0.00");
    return formattedAmount;
  };

  function formatNumber(num: number) {
    if (num) {
      return num < 10 ? `0${num}` : `${num}`;
    }
  }

    if (totalItems.length === 0) {
      return (
        <div className=" p-32 text-center">
          <p className="text-2xl font-semibold mb-6">your cart is empty</p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#DB4444] hover:bg-red-600 text-white px-10 py-4  rounded mt-4"
          >
            Shop Now
          </button>
        </div>
      );
    }

  return (
    <div className="p-32">
      <div className="flex items-center justify-start mb-8">
        <button
          onClick={() => navigate("/")}
          className="text-lg text-gray-400 mb-4"
        >
          Home
        </button>
        <p className="text-lg mx-2 mb-4">/</p>
        <h1 className="text-lg  mb-4">Cart</h1>
      </div>
      <table className="w-full border-collapse mb-8 mx-4">
        <thead className="">
          <tr className="text-left shadow-sm ">
            <th className="p-4 font-normal">Product</th>
            <th className="p-4 font-normal">Price</th>
            <th className="p-4 font-normal">Quantity</th>
            <th className="p-4 font-normal">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id} className="shadow-sm ">
              <td className="p-6 flex items-center gap-6">
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-6 h-6 m-4 bg-red-500 text-white rounded-full flex items-center justify-center"
                >
                  ✕
                </button>
                <div className="w-16 h-16">
                  <img src={item.image} alt={item.title} className="h-full" />
                </div>
                <span className="max-w-sm">{item.title}</span>
              </td>
              <td className="p-4 ">
                {CurrencyFormater({ amount: item.price })}
              </td>
              <td className="p-4 ">
                <div className="flex items-center py-2 px-4 gap-8 border-2 rounded-md w-fit">
                  <span> {formatNumber(cartItems[item.id])}</span>
                  <div className="flex flex-col gap-3 items-center">
                    <button onClick={() => addItems(item.id)}>
                      <img className="-rotate-90 w-3" src={next} alt="" />
                    </button>
                    <button onClick={() => minusQuantity(item.id)}>
                      <img className="rotate-90 w-3" src={next} alt="" />
                    </button>
                  </div>
                  {/* <div className="flex items-center border lack rounded-lg ">
                    <button
                      onClick={() => minusQuantity(item.id)}
                      className="bg-[#FEA301] hover:bg-[#fe8f01] rounded-l-lg px-2 py-1 text-lg text-white border-r lack"
                    >
                      -
                    </button>
                    <span className="w-8 text-center ">
                      {cartItems[item.id] || 0}
                    </span>
                    <button
                      onClick={() => addItems(item.id)}
                      className="bg-[#FEA301] hover:bg-[#fe8f01] rounded-r-lg px-2 py-1 text-lg text-white border-l lack"
                    >
                      +
                    </button>
                  </div> */}
                </div>
              </td>
              <td className="p-4 ">
                ${item.price * (cartItems[item.id] || 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mx-4 mb-8">
        <button className="px-8 py-4 border font-semibold hover:bg-gray-100 rounded">
          Return To Shop
        </button>
        <button className="px-8 py-4 border font-semibold rounded hover:bg-gray-100">
          Update Cart
        </button>
      </div>

      <div className="flex justify-between items-start m-4 mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border py3 px-6 rounded"
          />
          <button className="px-6 py-2 bg-red-500 text-white rounded">
            Apply Coupon
          </button>
        </div>
        <div className=" border border-black p-4 rounded w-1/3">
          <p className="flex justify-between border-b border-black py-4">
            <span className="">Subtotal:</span>{" "}
            <span>{CurrencyFormater({ amount: subtotal })}</span>
          </p>
          <p className="flex justify-between border-b border-black py-4">
            <span className="">Shipping:</span> <span>Free</span>
          </p>
          <p className="flex justify-between font-semibold py-4">
            <span>Total:</span>{" "}
            <span>{CurrencyFormater({ amount: subtotal })}</span>
          </p>
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => navigate("/checkout")}
              className="w-fit  mt-4 px-8 py-4 bg-red-500 text-white rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
