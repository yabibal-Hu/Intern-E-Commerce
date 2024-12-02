import cart from "../../public/img/cart.jpeg";

export default function () {
  return (
    <section className="grid grid-cols-4 mt-12 mb-20 mr-32">
      <div className="w-1/2">
        <img src={cart} alt="" className="w-full"/>
      </div>
      <div className="col-span-3 flex items-center justify-center">
        <div className="flex flex-col gap-6 items-start justify-center gap-4 ml-32">
          <p className="text-4xl font-medium">Log in to Exclusive</p>
          <p className=" text-base">Enter your details below</p>
          <form action="" className=" flex flex-col gap-8 w-full mt-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b w-full focus:ring-0 focus:outline-none "
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b w-full focus:ring-0 focus:outline-none "
            />
            <div className="flex justify-between items-center w-full">
              <button className="bg-[#DB4444] hover:bg-red-600 text-white px-10 py-4  rounded ">
                Log in
              </button>
              <p className="text-red-600">Forget Password?</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
