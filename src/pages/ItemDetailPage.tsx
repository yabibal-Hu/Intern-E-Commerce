import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Item } from "./types";
import { Rating } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import cart from "../../public/icon/white_cart.png";
import heart from "../../public/icon/heart.png";
import white_heart from "../../public/icon/White_heart.png";
import truck from "../../public/icon/iconoir_delivery-truck.png";
import return_ from "../../public/icon/icons8-return-24.png";

import { useWishlist } from "../contexts/wishContext";
import ItemCard from "../components/item/ItemCard";


export default function ItemDetailPage() {
var { id } = useParams();

const [item, setItem] = useState<Item | null>(null);
const [items, setItems] = useState<Item[]>([]);

console.log("items", items);
useEffect( () => {
 const fetchData = async () => {
  try {
   const product =await axios.get(`https://fakestoreapi.com/products/${id}`);
   setItem(product.data);

   const products = await axios.get(
     `https://fakestoreapi.com/products/category/${product?.data.category}`
   );
   setItems(products.data);
  } catch (error) {
   console.error("Error fetching data:", error);
 }
 }
 fetchData();
}, [id]);

const { addItems, cartItems, minusQuantity } = useCart();
const { wishlistItems, addItem, removeItem } = useWishlist();

const isInWishlist = wishlistItems[Number(id)] || false;


 const isInCart = cartItems[Number(id)] || false;


  const handleWishlistToggle = (itemId: number) => {
    if (isInWishlist) {
      removeItem(itemId);
    } else {
      addItem(itemId);
    }
  }

  return (
    <div className=" m-32">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span>Account / {item?.category} / </span>
        <span className="text-black font-medium">{item?.title}</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 ">
        {/* Product Images */}
        <div>
          <div className="mb-4 shadow flex justify-center p-16">
            <img src={item?.image} alt="Havic HV G-92 Gamepad" className="" />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{item?.title}</h1>
          <div className="flex items-center mb-4">
            {item && (
              <span className="flex items-center gap-2">
                <Rating
                  value={item?.rating.rate}
                  precision={0.1}
                  size="small"
                />
                <small className="text-gray-500 text-sm font-semibold">
                  ({item?.rating.count}) Reviews
                </small>
              </span>
            )}
            {/* <span className="ml-2 text-gray-600">(150 Reviews)</span> */}
            <span className="ml-2">|</span>
            <span className="ml-2 text-green-600 font-medium ">In Stock</span>
          </div>
          <p className="text-2xl font-bold mb-4">$192.00</p>
          <p className="text-gray-600 mb-4">{item?.description}</p>

          {/* Colors */}
          <div className="mb-4 border-t ">
            <div className="flex space-x-4 mt-2">
              <p className="font-medium">Colours:</p>
              <span className="w-6 h-6 bg-red-600 rounded-full cursor-pointer"></span>
              <span className="w-6 h-6 bg-gray-600 rounded-full cursor-pointer"></span>
            </div>
          </div>

          {/* Size */}
          <div className="flex items-center gap-8 mb-4">
            <p className="font-medium">Size:</p>
            <div className="flex space-x-4 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Now */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-black rounded">
              {isInCart ? (
                <div className="flex items-center justify-center">
                  <button
                    className="px-4 font-semibold py-2 border-r border-black hover:bg-red-600 hover:text-white"
                    onClick={() => minusQuantity(Number(id))}
                  >
                    -
                  </button>
                  <span className="px-4 w-14 text-center">
                    {cartItems[Number(id)]}
                  </span>
                  <button
                    className="px-4 font-semibold py-2 border-l border-black hover:bg-red-600 hover:text-white"
                    onClick={() => addItems(Number(id))}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addItems(Number(id))}
                  className=" flex justify-center items-center bg-black text-white px-6 py-4 rounded
                     opacity-100 h-10"
                >
                  <img src={cart} alt="" className="w-6 mr-4" />
                  Add to Cart
                </button>
              )}
            </div>
            {isInCart && (
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                Buy Now
              </button>
            )}
            <button
              onClick={() => handleWishlistToggle(Number(id))}
              className={` ${
                isInWishlist ? "bg-red-600" : "bg-white hover:bg-gray-100"
              } border rounded px-6 py-2 `}
            >
              <img
                src={isInWishlist ? white_heart : heart}
                alt=""
                className="w-6"
              />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="">
            <div className="flex items-center space-x-4 border-x border-t border-black p-2 rounded-t">
              <img src={truck} alt="" />
              <span>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-xs underline">
                  {" "}
                  Enter your postal code for availability
                </p>
              </span>
            </div>
            <div className="flex items-center space-x-4 border border-black p-2 rounded-b">
              <img src={return_} alt="" />
              <span>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-xs">
                  Free 30 Days Delivery <u>Returns</u>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-24">
        <div className="flex gap-6 mb-12">
          <div className="w-5 h-10 bg-red-500 rounded-md"></div>
          <div className="flex flex-col">
            <h1 className="text-xl text-red-500 mt-2">Related Items</h1>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {items.map((item: Item) => (
            <ItemCard
              key={item.id}
              item={item}
              bones={false}
              rate={true}
              isFixedButton={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

