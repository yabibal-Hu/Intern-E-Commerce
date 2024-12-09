import React from "react";
import women from "../../public/img/women.png";
import men_1 from "../../public/img/men_1.png";
import men_2 from "../../public/img/men_2.png";
import shop from "../../public/icon/shop.png";
import dollar from "../../public/icon/dollar.png";
import bag from "../../public/icon/bag.png";
import delivery from "../../public/icon/delivery.png";
import headphone_white from "../../public/icon/headphone-white.png";
import check from "../../public/icon/check.png";
import dollar_icon from "../../public/icon/Dollar_icon.png";
import leady from "../../public/img/leadys.jpeg";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: men_1,
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: women,
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: men_2,
    },
  ];

  const [Index, setIndex] = React.useState(0);
  return (
    <div className=" py-32 bg-gray-50">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mx-32 mb-4">
        Home / <span className="font-semibold">About</span>
      </div>
      <section className="grid grid-cols-4 mt-12 mb-32 ml-32">
        <div className="col-span-2 flex items-center justify-center pr-32">
          <div className="flex flex-col gap-6 items-start justify-center gap-4 ">
            <h1 className="text-[54px] font-semibold mb-6">Our Story</h1>
            <p className="text-gray-700 mb-4">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-gray-700">
              Exclusive has more than 1 million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from consumer products.
            </p>
          </div>
        </div>
        <div className="col-span-2  h-[609px] mr-auto">
          <img src={leady} alt="" className="w-full h-full" />
        </div>
      </section>
      {/*  */}

      {/* Statistics Section */}
      <div className="  mx-32">
        <div className="grid grid-cols-4 gap-4 text-center mb-32">
          <div className="flex flex-col justify-center gap-4 items-center p-6 border rounded-lg">
            <div className="bg-black rounded-full border border-gray-300 border-8 w-fit ">
              <img src={shop} alt="" className="w-14 h-14 p-2" />
            </div>
            <h2 className="text-2xl font-bold">10.5k</h2>
            <p className="text-gray-600">Sellers active our site</p>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center p-6 border rounded-lg bg-red-500 text-white">
            <div className="bg-white rounded-full border border-red-300 border-opacity-100  border-8 w-fit ">
              <img src={dollar_icon} alt="" className="w-14 h-14 p-2" />
            </div>
            <h2 className="text-2xl font-bold">33k</h2>
            <p>Monthly Product Sale</p>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center p-6 border rounded-lg">
            <div className="bg-black rounded-full border border-gray-300 border-8 w-fit ">
              <img src={bag} alt="" className="w-14 h-14 p-2" />
            </div>
            <h2 className="text-2xl font-bold">45.5k</h2>
            <p className="text-gray-600">Customers active on our site</p>
          </div>
          <div className="flex flex-col justify-center gap-4 items-center p-6 border rounded-lg">
            <div className="bg-black rounded-full border border-gray-300 border-8 w-fit ">
              <img src={dollar} alt="" className="w-14 h-14 p-2" />
            </div>
            <h2 className="text-2xl font-bold">25k</h2>
            <p className="text-gray-600">Annual gross sale</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32 w-full">
          <div className="flex justify-between  mb-16">
            {teamMembers.map((member, index) => (
              <div className="" key={index}>
                <div className="mb-4  h-[430px] bg-gray-200 rounded overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[400px] px-8 pt-12  "
                  />
                </div>
                <h3 className="text-3xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex  gap-4 mt-4">
                  <Link to="">
                    <img
                      src="https://img.icons8.com/?size=100&id=437&format=png&color=000000"
                      alt=""
                      className="w-6"
                    />
                  </Link>
                  <Link to="">
                    <img
                      src="https://img.icons8.com/?size=100&id=102748&format=png&color=000000"
                      alt=""
                      className="w-6"
                    />
                  </Link>
                  <Link to="">
                    <img
                      src="https://img.icons8.com/?size=100&id=BqFEC0JLkJBE&format=png&color=000000"
                      alt=""
                      className="w-6"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
            <div className="flex justify-center items-center mt-4 gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    Index === index ? "w-4 h-4 bg-red-800 border border-2 border-gray-300" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
        </div>

        {/* Features Section */}
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
    </div>
  );
}
