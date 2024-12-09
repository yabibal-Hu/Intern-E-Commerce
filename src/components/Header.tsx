import { Link } from "react-router-dom";
import next from "../../public/icon/next.png";
import search from "../../public/icon/search.png";
import cart from "../../public/icon/cart.png";
import heart from "../../public/icon/heart.png";
import { ButtonBase } from "@mui/material";
import { useState } from "react";
import star from "../../public/icon/W-star.png";
import bag from "../../public/icon/bag.png";
// import logoutt from "/icon/logout.png";
import avatar from "../../public/icon/avatar.png";
import cancel from "../../public/icon/cancel.png";
import { useWishlist } from "../contexts/wishContext";
import { useCart } from "../contexts/CartContext";

export default function Header() {
  const [iconColor, setIconColor] = useState("000000");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { wishlistItems } = useWishlist();
  const { cartItems } = useCart();
  const totalIWishlistItems = Object.keys(wishlistItems).length;
  const totalCartItems = Object.keys(cartItems).length;
const token = sessionStorage.getItem("token");
const [isActive, setIsActive] = useState("home");
const signOut = () => {
  sessionStorage.removeItem("token");
  window.location.replace("/login");

}

  return (
    <section className="sticky top-0 bg-white z-50">
      <div className="flex justify-center items-center bg-black text-white text-sm py-3 px-12 relative ">
        <p className="mr-4">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link className="font-semibold underline" to="/">
          ShopNow
        </Link>
        <button className="flex  absolute right-32">
          Emglish{" "}
          <span>
            <img src={next} alt="" />
          </span>
        </button>
      </div>
      <div className="flex justify-between items-center pb-6 px-32  mt-10 border-b">
        <p className="font-bold text-2xl">Exclusive</p>
        <div className="flex gap-12 font-normal text-base">
          <Link
            onClick={() => setIsActive("home")}
            className={isActive === "home" ? "border-b border-black" : ""}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsActive("contact")}
            className={isActive === "contact" ? "border-b border-black" : ""}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            onClick={() => setIsActive("about")}
            className={isActive === "about" ? "border-b border-black" : ""}
            to="/about"
          >
            About
          </Link>
          {!token && (
            <Link
              onClick={() => setIsActive("signup")}
              className={isActive === "signup" ? "border-b border-black" : ""}
              to="/signup"
            >
              Sign Up
            </Link>
          )}
        </div>
        <div className="flex gap-8 items-center">
          <div className="relative w-60 rounded ">
            <input
              type="search"
              placeholder="What are you looking for?"
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
          {token && (
            <div className="flex justify-center items-center gap-8">
              <Link to="/wishlist" className="relative">
                <img src={heart} alt="" className="w-8 p-1" />
                {totalIWishlistItems > 0 && (
                  <div className="absolute top-0 -right-0.5 w-4 h-4 bg-red-600 rounded-full flex justify-center items-center text-white text-xs">
                    {totalIWishlistItems}
                  </div>
                )}
              </Link>
              <Link to="/cart" className="relative">
                <img src={cart} alt="" className="w-8 " />
                {totalCartItems > 0 && (
                  <div className="absolute top-0 -right-0.5 w-4 h-4 bg-red-600 rounded-full flex justify-center items-center text-white text-xs">
                    {totalCartItems}
                  </div>
                )}
              </Link>
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="relative"
              >
                <ButtonBase
                  onMouseEnter={() => setIconColor("ffffff")}
                  onMouseLeave={() => setIconColor("000000")}
                  className="flex justify-center items-center text-black hover:rounded hover:rounded-full w-10 h-10 duration-300 hover:bg-red-600"
                >
                  <img
                    src={`https://img.icons8.com/?size=100&id=111473&format=png&color=${iconColor}`}
                    className="w-8 "
                    alt="Dynamic Icon"
                  />
                </ButtonBase>
                {isDropdownOpen && (
                  <div
                    className="absolute top-10 right-0 w-56 bg-gradient-to-r from-gray-400 to-gray-700 text-white text-sm rounded shadow-md"
                    role="menu"
                  >
                    <ul className="">
                      <li
                        className="px-4 py-2 pt-4 hover:bg-gray-700 hover:rounded-t "
                        role="menuitem"
                      >
                        <Link to="/profile" className="flex items-center gap-2">
                          <img
                            src={avatar}
                            alt="Account Icon"
                            className="w-5 h-5"
                          />
                          <span>Manage My Account</span>
                        </Link>
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-700 "
                        role="menuitem"
                      >
                        <Link to="/" className="flex items-center gap-2">
                          <img
                            src={bag}
                            alt="Orders Icon"
                            className="w-5 h-5"
                          />
                          <span>My Orders</span>
                        </Link>
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-700 "
                        role="menuitem"
                      >
                        <Link to="/" className="flex items-center gap-2">
                          <img
                            src={cancel}
                            alt="Cancellations Icon"
                            className="w-5 h-5"
                          />
                          <span>My Cancellations</span>
                        </Link>
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-700 "
                        role="menuitem"
                      >
                        <Link to="/" className="flex items-center gap-2">
                          <img
                            src={star}
                            alt="Reviews Icon"
                            className="w-5 h-5"
                          />
                          <span>My Reviews</span>
                        </Link>
                      </li>
                      <li
                        className="px-4 py-2 pb-4 hover:bg-gray-700 hover:rounded-b "
                        role="menuitem"
                      >
                        <button
                          onClick={signOut}
                          className="flex items-center gap-2 w-full text-left"
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=100528&format=png&color=ffffff"
                            alt="Logout Icon"
                            className="w-5 h-5"
                          />
                          <span>Logout</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
