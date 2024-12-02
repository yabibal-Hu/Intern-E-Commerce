import axios from "axios";
import { useEffect, useState } from "react";
import phone from "../../public/img/phone.jpeg";
import apple from "../../public/icon/apple.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const res = axios.get("https://fakestoreapi.com/products/categories");
    res.then((res) => {
      setCategory(res.data);
    });
  }, []);

  const [Index, setIndex] = useState(0);

  console.log("category", category);
  return (
    <section className=" px-32">
      <div className="flex gap-4">
        <div className="w-1/3 gap-4 flex flex-col justify-end items-center border-r mt-10 ">
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
              <Link to="/" className="underline"> Shop Now</Link>
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
      </div>
      {/*  */}
      <div className="mt-12">category</div>
    </section>
  );
}
