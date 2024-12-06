import axios from "axios";
import { useEffect, useState } from "react";
import phone from "/img/phone.jpeg";
import speaker from "/img/music.png";
import game from "/img/game.png";
import gucci from "/img/gucci.png";
import tape from "/img/tape.png";
import girl from "/img/women.jpeg";
import delivery from "/icon/delivery.png";
import headphone_white from "/icon/headphone-white.png";
import check from "/icon/check.png";
import apple from "/icon/apple.png";
import men from "/icon/shorts.png";
import women from "/icon/womens.png";
import phoneicon from "/icon/phone.png";
import electronics from "/icon/electronics.png";
import headphone from "/icon/headphone.png";
import jewelry from "/icon/jewelry.png";

import { Link } from "react-router-dom";
import ItemCard from "../components/item/ItemCard";
import { Item } from "./types";
import { ButtonBase } from "@mui/material";

export default function Home() {
  const [mensClothingItems, setMensClothingItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [categoryName, setCategoryName] = useState("men's clothing");

useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch men's clothing items
      const mensResponse = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      setMensClothingItems(mensResponse.data);

      // Fetch categories
      const categoryResponse = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(categoryResponse.data);

      // Fetch all items
      const itemsResponse = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setItems(itemsResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);

      // Optionally display user feedback
      alert("An error occurred while fetching data. Please try again later.");
    }
  };

  fetchData();
}, []);

  // console.log("mensClothingItem",mensClothingItem)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds -
          1;

        if (totalSeconds <= 0) {
          clearInterval(interval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [Index, setIndex] = useState(0);
  const filterItems = (catalog: string) => {
    setFilteredItems(items.filter((item) => item.category === catalog));

    setCategoryName(catalog);
  };

  const allItems = () => {
    setFilteredItems(items);
    setCategoryName("All Products");
  };

  return (
    <div className=" px-32">
      <section className="flex gap-4">
        <div className="w-1/3 gap-4 flex flex-col justify-end items-center border-r pt-10 ">
          <div className="">
            <ul className="flex flex-col gap-4 pr-12">
              <li>Woman’s Fashion</li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
        </div>
        <div className="w-2/3  bg-black mt-10 ml-10">
          <div className=" flex justify-center gap-8 items-center text-white">
            <div className="flex flex-col gap-4">
              <span className="flex  items-center gap-2">
                <img src={apple} alt="" />
                <p className="">iPhone 14 Series</p>
              </span>
              <p className=" text-5xl font-semibold">Up to 10% </p>
              <p className=" text-5xl font-semibold">off Voucher</p>
              <Link to="/" className="underline">
                {" "}
                Shop Now
              </Link>
            </div>
            <img src={phone} alt="" />
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  Index === index ? "bg-red-800 border" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <section className="mt-12 ">
        <div className="flex items-center gap-2 text-red-500">
          <div className="w-5 h-10 bg-red-500 rounded-md"></div>
          <span className="text-base font-semibold">Today's</span>
        </div>
        <div className="flex justify-between items-center bg-white py-4 ">
          <div className="flex gap-32 items-center">
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold mt-2">Flash Sales</h1>
            </div>

            <div className="flex gap-2 items-center">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div key={unit} className="flex items-end">
                  <span className="text-2xl font-bold flex flex-col items-center">
                    <p className="font-medium text-xs">
                      {index === 0
                        ? "Days"
                        : index === 1
                        ? "Hours"
                        : index === 2
                        ? "Minutes"
                        : "Seconds"}
                    </p>
                    <p className="font-bold text-4xl">
                      {value.toString().padStart(2, "0")}
                    </p>
                  </span>
                  {index < 3 && <span className="text-red-500 m-2">:</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">&larr;</span>
            </button>
            <button className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center relative">
              <span className="absolute text-lg font-bold">&rarr;</span>
            </button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="mt-8 flex flex-col items-center gap-8 border-b pb-16">
        <div className="grid grid-cols-4 gap-8">
          {mensClothingItems.map((item) => (
            <ItemCard
              key={item}
              item={item}
              bones={true}
              rate={true}
              isFixedButton={false}
            />
          ))}
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded mt-10 w-fit">
          View All Products
        </button>
      </section>
      {/*  */}
      <section className="mb-24">
        <div className="flex items-center gap-2 text-red-500 mt-12">
          <div className="w-5 h-10 bg-red-500 rounded-md"></div>
          <span className="text-base font-semibold">Categories</span>
        </div>
        <div className="flex justify-between items-center bg-white py-4 ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mt-2">Browse By Category</h1>
          </div>
          <div className="flex gap-2">
            <button className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">&larr;</span>
            </button>
            <button className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center relative">
              <span className="absolute text-lg font-bold">&rarr;</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-8 border-b pb-16">
          {category.map((item, index) => (
            <ButtonBase
              key={index}
              sx={{
                border: "1px solid #D1D5DB",
                borderRadius: "0.375rem",
                padding: "16px 0",
                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
              }}
              onClick={() => filterItems(item)}
              className=" border border-gray-300 hover:bg-gray-100 rounded-md flex flex-col items-center justify-center gap-4 py-6"
            >
              <img
                src={
                  index === 0
                    ? electronics
                    : index === 1
                    ? jewelry
                    : index === 2
                    ? men
                    : index === 3
                    ? women
                    : index === 4
                    ? headphone
                    : index === 5
                    ? jewelry
                    : ""
                }
                className="w-14"
                alt=""
              />
              <p className="text-base font-normal">{item}</p>
            </ButtonBase>
          ))}
          <ButtonBase
            sx={{
              border: "1px solid #D1D5DB",
              borderRadius: "0.375rem",
              padding: "16px 0",
              "&:hover": {
                backgroundColor: "#F3F4F6",
              },
            }}
            className=" border border-gray-300 hover:bg-gray-100 rounded-md flex flex-col items-center justify-center gap-4 py-6"
          >
            <img src={headphone} className="w-14" alt="" />
            <p className="text-base font-normal"> Headphones</p>
          </ButtonBase>
          <ButtonBase
            sx={{
              border: "1px solid #D1D5DB",
              borderRadius: "0.375rem",
              padding: "16px 0",
              "&:hover": {
                backgroundColor: "#F3F4F6",
              },
            }}
            className="flex flex-col items-center justify-center gap-4 py-6"
          >
            <img src={phoneicon} className="w-14" alt="" />
            <p className="text-base font-normal">Phones</p>
          </ButtonBase>
        </div>

        <div>
          <div className="flex items-center gap-2 text-red-500 mt-12">
            <div className="w-5 h-10 bg-[#00FF66] rounded-md"></div>
            <span className="text-base text-[#00FF66] font-semibold">
              Available
            </span>
          </div>
          <div className="flex justify-between items-center bg-white py-4 mb-12 ">
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold mt-2">{categoryName}</h1>
            </div>

            <button
              onClick={() => allItems()}
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 mr-48 rounded mt-10 w-fit"
            >
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {filteredItems.length > 0
            ? filteredItems.map((item, index) => (
                <ItemCard
                  key={index}
                  item={item}
                  bones={false}
                  rate={true}
                  isFixedButton={false}
                />
              ))
            : mensClothingItems.map((item, index) => (
                <ItemCard
                  key={index}
                  item={item}
                  bones={false}
                  rate={true}
                  isFixedButton={false}
                />
              ))}
        </div>
      </section>
      <section>
        <div className="bg-black text-white w-full h-[500px] flex justify-between items-center px-8 lg:px-16 shadow-lg">
          <div className="flex flex-col gap-12">
            <h3 className="text-[#00FF66] text-lg font-medium">Categories</h3>
            <h1 className="text-4xl lg:text-5xl font-bold leading-10">
              Enhance Your Music Experience
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full p-2 items-center text-black bg-white">
                <span className="text-base font-semibold">23</span>
                <small className="text-xs">Hours</small>
              </div>
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full p-2 items-center text-black bg-white">
                <span className="text-base font-semibold">05</span>
                <small className="text-xs">Days</small>
              </div>
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full p-2 items-center text-black bg-white">
                <span className="text-base font-semibold">59</span>
                <small className="text-xs">Minutes</small>
              </div>
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full p-2 items-center text-black bg-white">
                <span className="text-base font-semibold">35</span>
                <small className="text-xs">Seconds</small>
              </div>
            </div>

            <button className="bg-[#00FF66] w-fit text-white font-medium px-12 py-4 rounded-sm hover:bg-green-600 transition">
              Buy Now!
            </button>
          </div>

          <div className=" h-full flex justify-center items-center">
            <img
              src={speaker}
              alt="Speaker"
              className=" h-5/6 object-contain drop-shadow-white drop-shadow-[1px_10px_200px]"
            />
          </div>
        </div>
      </section>
      <section className="mt-28">
        <div className="flex items-center gap-2 text-red-500 mt-12">
          <div className="w-5 h-10 bg-red-500 rounded-md"></div>
          <span className="text-base font-semibold">Featured</span>
        </div>
        <div className="flex justify-between items-center bg-white py-4 mb-12">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mt-2">New Arrival</h1>
          </div>
          <div className="flex gap-2">
            <button className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">&larr;</span>
            </button>
            <button className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center relative">
              <span className="absolute text-lg font-bold">&rarr;</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-white h-[600px] w-full mb-16">
          <div className="bg-black relative h-full rounded-lg overflow-hidden">
            <img
              src={game}
              alt="PlayStation 5"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 space-y-2">
              <p className="text-xl font-bold">PlayStation 5</p>
              <p className="text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="mt-2  py-2 hover:text-green-600 text-white underline font-semibold rounded-lg ">
                Shop Now
              </button>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-8">
            <div className="bg-black relative flex items-end justify-between p-4 rounded-md overflow-hidden h-[284px]">
              <div className="space-y-2 ">
                <p className="text-xl font-bold">Women's Collections</p>
                <p className="text-sm">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="mt-2 py-2 hover:text-green-600 text-white underline font-semibold rounded-md ">
                  Shop Now
                </button>
              </div>
              <img
                src={girl}
                alt="Women's Collections"
                className="h-full object-cover scale-x-[-1]"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 h-[284px]">
              <div className="bg-black relative rounded-md overflow-hidden flex flex-col items-center justify-center p-4">
                <img
                  src={tape}
                  alt="Speakers"
                  className="h-56 object-contain"
                />
                <div className=" absolute bottom-4 left-4 space-y-2">
                  <p className="text-xl font-bold">Speakers</p>
                  <p className="text-sm">Amazon wireless speakers.</p>
                  <button className="mt-2  py-2 hover:text-green-600 text-white underline font-semibold rounded-md ">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="bg-black relative rounded-md overflow-hidden flex flex-col items-center justify-between p-4">
                <img
                  src={gucci}
                  alt="Perfume"
                  className="h-56 object-contain"
                />
                <div className="absolute bottom-4 left-4 space-y-2">
                  <p className="text-xl font-bold">Perfume</p>
                  <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                  <button className="mt-2  py-2 hover:text-green-600 text-white underline font-semibold rounded-md ">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center gap-32 my-28">
        <div className="flex flex-col items-center">
          <div className="bg-black rounded-full border border-gray-300 border-8 w-fit ">
            <img src={delivery} alt="" className="w-14 h-14 p-2" />
          </div>
          <p className="text-xl font-semibold mt-4">FREE AND FAST DELIVERY</p>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-black rounded-full border border-gray-300 border-8 w-fit ">
            <img src={headphone_white} alt="" className="w-14 h-14 p-2" />
          </div>
          <p className="text-xl font-semibold mt-4">24/7 CUSTOMER SERVICE</p>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-black rounded-full border border-gray-300 border-8 w-fit ">
            <img src={check} alt="" className="w-14 h-14 p-2" />
          </div>
          <p className="text-xl font-semibold mt-4">MONEY BACK GUARANTEE</p>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </section>
    </div>
  );
}
