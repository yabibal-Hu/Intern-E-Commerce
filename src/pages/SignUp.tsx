import cart from "../../public/img/cart.jpeg";
import Google from "../../public/icon/googl.png";

export default function () {
  return (
    <section className="grid grid-cols-4 mt-12 mb-20 mr-32">
      <div className="col-span-2">
        <img src={cart} alt="" />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <div className="flex flex-col gap-6 items-start justify-center gap-4 ml-32">
          <p className="text-4xl font-medium">Create an account</p>
          <p className=" text-base">Enter your details below</p>
          <form action="" className=" flex flex-col gap-8 w-full mt-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b w-full focus:ring-0 focus:outline-none "
            />
            <input
              type="password"
              placeholder="Email or Phone Number"
              className="border-b w-full focus:ring-0 focus:outline-none "
            />
            <input
              type="text"
              placeholder="Password"
              className="border-b w-full focus:ring-0 focus:outline-none "
            />
            <div className="flex flex-col gap-4 justify-between items-center w-full">
              <button className="bg-[#DB4444] hover:bg-red-600 text-white px-10 py-4 w-full  rounded ">
                Create Account
              </button>
              <button className="flex justify-center items-center gap-4 border w-full py-4 px-10 ">
                <img src={Google} alt="" className="w-6" />
                <p>Sign up with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
