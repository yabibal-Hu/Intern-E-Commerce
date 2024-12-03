// import { Rating } from "@mui/material";
// import CurrencyFormat from "../currencyFormat/CurrencyFormat";
// import classes from "./product.module.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
import { Item } from "../../pages/types";
import { Rating } from "@mui/material";
import heart from "../../../public/icon/heart.png";
import eye from "../../../public/icon/eye.png";
import numeral from "numeral";
// import { Type } from "../../Utility/action.type";
// import { DataContext } from "../DataProvider/DataProvider";

export default function ItemCard({ item,bones }: { item: Item ;bones: boolean }) {
  const { image, rating,  title, price } = item;
  // const [state, dispatch] = useContext(DataContext);

  // const addToCart = () => {
  //   dispatch({
  //     type: Type.ADD_TO_BASKET,
  //     item: { image, rating, id, title, price, description },
  //   });
  // };

  const CurrencyFormater = ({ amount }: { amount: number }) => {
    const formattedAmount = numeral(amount).format("$0,0.00");
    return formattedAmount;
  };



 return (
   <div className="flex items-center justify-center flex-col gap-4 relative shadow-md group">
     {/* <div className="h-72 w-full relative flex items-center justify-center"> */}
     <div className="h-[300px] w-[190px] flex items-center justify-center relative ">
       <Link to={`/`} className="mb-6">
         <img
           src={image}
           alt={title}
           className="h-[180px] w-full object-contain "
         />
       </Link>
     </div>
     {/* Button initially hidden and visible on hover */}
     <button className="w-full bg-black text-white left-0 absolute opacity-0 top-64  py-2  group-hover:opacity-100 transition-opacity duration-300">
       Add to Cart
     </button>

     {/* </div> */}
     {/* Discount Badge */}
     {bones && (
       <p className="absolute top-2 left-2 p-2 bg-red-500 text-white text-xs rounded">
         -35%
       </p>
     )}
     {/* Action Buttons */}
     <span className="absolute top-2 right-2 flex flex-col gap-2">
       <button className="flex hover:bg-gray-200 justify-center items-center border w-8 h-8 rounded-full bg-white">
         <img src={heart} alt="" className="w-6" />
       </button>
       <button className="flex hover:bg-gray-200 justify-center items-center border w-8 h-8 rounded-full bg-white">
         <img src={eye} alt="" className="w-6" />
       </button>
     </span>
     {/* Product Details */}
     <div className="grid  gap-4 items-start w-full px-6 mb-4">
       <h3 className="font-medium text-base">{title}</h3>
       <span className="flex items-center gap-4">
         <p className="text-red-600 font-semibold text-base">
           {CurrencyFormater({ amount: price })}
         </p>
         <p className="line-through text-gray-500 font-semibold text-base">
           {CurrencyFormater({ amount: price + (price * 35) / 100 })}
         </p>
       </span>
       {rating ? (
         <span className="flex items-center gap-2">
           <Rating value={rating?.rate} precision={0.1} size="small" />
           <small className="text-gray-500 text-sm font-semibold">
             ({rating?.count})
           </small>
         </span>
       ) : (
         <small>No ratings available</small>
       )}
     </div>
   </div>
 );
}
