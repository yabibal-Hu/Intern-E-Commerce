import send from "../../public/icon/send.png";
import facebook from "../../public/icon//f.png";
import twitter from "../../public/icon/t.png";
import instagram from "../../public/icon/insta.png";
import linkedin from "../../public/icon/in.png";
import qr from "../../public/img/qr.jpeg";
import google from "../../public/img/google.png";
import apple from "../../public/img/apple.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-5 gap-20 px-32 py-20">
        <div>
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-2xl">Exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li className="relative lg:pr-12 pr-4">
              <input
                className="p-2 pr-12 bg-black text-sm text-white border border-white w-full placeholder:text-gray-500"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="absolute  right-14 top-1 p-2 w-8 ">
                <img src={send} alt="" />
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-2xl">Support</li>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-2xl">Account</li>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-2xl">Quick Link</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl mb-4">Download App</p>
          <div className="flex flex-col gap-2 ">
            <p>Save $3 with App News User Only</p>
            <div className="flex flex-col ">
              <div className="flex gap-2 h-24 mb-4">
                <img src={qr} alt="" className="h-full border border-white" />
                <span className="flex flex-col gap-1">
                  <Link to="/" className="h-1/2 p-1">
                    <img src={google} alt="" className="h-full min-w-[110px]" />
                  </Link>
                  <Link to="/" className="h-1/2 p-1">
                    <img src={apple} alt="" className="h-full min-w-[110px]" />
                  </Link>
                </span>
              </div>
              <div className="flex gap-6">
                <Link to="/">
                  <img src={facebook} alt="" className="w-6"/>
                </Link>
                <Link to="/">
                  <img src={twitter} alt="" className="w-6"/>
                </Link>
                <Link to="/">
                  <img src={instagram} alt="" className="w-6"/>
                </Link>
                <Link to="/">
                  <img src={linkedin} alt="" className="w-6"/>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
