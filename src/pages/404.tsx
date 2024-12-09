import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className=" mx-32 my-24">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span>Home / </span>
        <span className="text-black font-medium">404 Error</span>
      </div>
      <div className="text-center ">
        <p className="text-[110px] font-semibold">404 Not Found</p>
        <p className="mb-24">Your visited page not found. You may go home page.</p>
        <Link
          to="/"
          className="bg-[#DB4444] hover:bg-red-600 text-white px-10 py-4  rounded"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}
