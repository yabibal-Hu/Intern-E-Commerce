export default function ContactPage() {
  return (
    <>
      <div className="text-sm text-gray-600 mt-32 mx-32 mb-16">
        Home / <span className="font-semibold">About</span>
      </div>
      <div className="mx-32 mb-32 flex gap-8">
        <div className="max-w-1/3 bg-white shadow-md rounded-lg p-6 ">
          <div className="flex items-center mb-8">
            <div className="ml-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 w-10 h-10 p-2 rounded-full">
                  <img
                    src="https://img.icons8.com/?size=100&id=9659&format=png&color=ffffff"
                    alt=""
                  />
                </div>
                <h3 className="text-lg font-semibold">Call To Us</h3>
              </div>
              <p className="text-gray-500">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-700 font-medium">Phone: +00011112222</p>
            </div>
          </div>

          <hr className="border-gray-300 mb-8" />

          <div className="flex items-center">
            <div className="ml-4 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 w-10 h-10 p-2 rounded-full">
                  <img
                    src="https://img.icons8.com/?size=100&id=63&format=png&color=ffffff"
                    alt=""
                  />
                </div>

                <h3 className="text-lg font-semibold">Write To Us</h3>
              </div>
              <p className="text-gray-500">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-700 font-medium">
                Emails: customer@exclusive.com
              </p>
              <p className="text-gray-700 font-medium">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" w-2/3 bg-white shadow-md rounded-lg p-6 ">
          <form >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-gray-100 rounded-md p-3 w-full focus:outline-none "
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="bg-gray-100 rounded-md p-3 w-full focus:outline-none "
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="bg-gray-100 rounded-md p-3 w-full focus:outline-none "
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-gray-100 rounded-md p-3 w-full h-48 focus:outline-none  mb-4"
            ></textarea>
            <div className="flex justify-end">
            <button
              type="submit"
              className="w-fit bg-red-500 font-semibold py-3 px-6 rounded-md hover:bg-red-600 text-white"
              >
              Send Message
            </button>
             </div>
          </form>
        </div>
      </div>
    </>
  );
}
