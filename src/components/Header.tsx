import { Link } from "react-router-dom";
import next from "../../public/icon/next.png";
import search from "../../public/icon/search.png";

export default function Header() {
  return (
    <section className=" ">
      <div className="flex justify-center items-center bg-black text-white text-sm py-3 px-12 relative ">
        <p className="mr-4">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link className="font-semibold underline" to="/">
          ShopNow
        </Link>
        <button className="flex  absolute right-16">
          Emglish{" "}
          <span>
            <img src={next} alt="" />
          </span>
        </button>
      </div>
      <div className="flex justify-between items-center pb-6 px-32  mt-10 border-b">
        <p className="font-bold text-2xl">Exclusive</p>
        <div className="flex gap-12 font-normal text-base">
          <Link to="/">Home</Link>
          <Link to="/">Contact</Link>
          <Link to="/"> About</Link>
          <Link to="/"> Sign Up</Link>
        </div>
        <div className="relative w-60 rounded ">
          <input
            type="search"
            placeholder="What are you looking for?"
            // adjust the placeholder color
            className=" w-full rounded  focus:ring-0 focus:outline-none bg-gray-100 py-2 pl-4 pr-10 text-sm"
          />

          <div className="absolute inset-y-0 right-4 flex items-center pl-3">
            <img
              className="h-5 w-5 text-gray-400"
              src={search}
              alt="Search Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
