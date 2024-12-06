import axios from "axios";
import React, { useEffect, useState } from "react";
import { Item } from "./types";
import { useCart } from "../contexts/CartContext";
import numeral from "numeral";
import method_1 from "../../public/img/method_1.png";
import method_2 from "../../public/img/method_2.png";
import method_3 from "../../public/img/methhod_3.png"
import method_4 from "../../public/img/method_4.png";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Bank");
  const [couponCode, setCouponCode] = useState("");

  const { cartItems, removeItem,  clearCart } = useCart();
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
  // const cartItems = [
  //   { id: 1, name: "LCD Monitor", price: 650, image: "monitor.jpg" },
  //   { id: 2, name: "H1 Gamepad", price: 1100, image: "gamepad.jpg" },
  // ];
  const subtotal = filteredItems.reduce(
    (total, item) => total + item.price * (cartItems[item.id] || 0),
    0
  );
  const CurrencyFormater = ({ amount }: { amount: number }) => {
    const formattedAmount = numeral(amount).format("$0,0.00");
    return formattedAmount;
  };
  // const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };
const Navigate = useNavigate()
  const handlePlaceOrder = () => {
clearCart()
Navigate("/")
    alert("Order placed successfully!");
  };

  const handleApplyCoupon = () => {
    alert(`Coupon "${couponCode}" applied!`);
  };

  return (
    <div className="p-32 grid grid-cols-1 md:grid-cols-2 gap-48">
      {/* Billing Details Form */}
      <div>
        <h2 className="text-4xl font-semibold mb-12">Billing Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 font-medium">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              value={billingDetails.firstName}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 font-medium">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={billingDetails.companyName}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 font-medium">
              Street Address*
            </label>
            <input
              type="text"
              name="streetAddress"
              value={billingDetails.streetAddress}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 font-medium">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              name="apartment"
              value={billingDetails.apartment}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 font-medium">
              Town/City*
            </label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 font-medium">
              Phone Number*
            </label>
            <input
              type="text"
              name="phone"
              value={billingDetails.phone}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 font-medium">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
              required
            />
          </div>
          <div>
            <label className="flex text-gray-400 items-center">
              <input type="checkbox" className="mr-2" />
              Save this information for faster checkout next time
            </label>
          </div>
        </form>
      </div>

      {/* Cart Summary and Payment */}
      <div className="mt-16">
        <div className="mb-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded"
                />
              <p>{item.title}</p>
                </div>
              <p>{CurrencyFormater({ amount: item.price })}</p>
            </div>
          ))}
          <div className=" py-4">
            <p className="flex justify-between border-b border-gray-600 py-3">
              <span>Subtotal:</span>{" "}
              <span>{CurrencyFormater({ amount: subtotal })}</span>
            </p>
            <p className="flex justify-between border-b border-gray-600 py-3">
              <span>Shipping:</span> <span>Free</span>
            </p>
            <p className="flex justify-between py-3">
              <span>Total:</span>{" "}
              <span>{CurrencyFormater({ amount: subtotal })}</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-4">Payment Method</h3>
          <div className=" flex justify-between mb-4" >
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Bank"
                checked={paymentMethod === "Bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Bank
            </label>
            <span className="flex gap-2">
              <img className="h-6" src={method_1} alt="" />
              <img className="h-6" src={method_2} alt="" />
              <img className="h-6" src={method_3} alt="" />
              <img className="h-6" src={method_4} alt="" />
            </span>
          </div>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Cash"
              checked={paymentMethod === "Cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Cash on Delivery
          </label>
        </div>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-grow border p-2 rounded mr-2"
          />
          <button
            onClick={handleApplyCoupon}
            className="px-6 py-2 bg-red-500 text-white rounded"
          >
            Apply Coupon
          </button>
        </div>

        <button
          onClick={handlePlaceOrder}
          className=" px-8 py-3 bg-red-500 text-white rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
