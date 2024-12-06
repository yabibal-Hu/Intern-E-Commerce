import { Link } from "react-router-dom";
import { Item } from "../../pages/types";
import { Rating } from "@mui/material";
import heart from "/icon/heart.png";
import white_heart from "/icon/White_heart.png";
import eye from "/icon/eye.png";
import white_cart from "/icon/white_cart.png";
import delete_icon from "/icon/delete.png";
import numeral from "numeral";
import { useWishlist } from "../../contexts/wishContext";
import { useCart } from "../../contexts/CartContext";

export default function ItemCard({
  item,
  bones,
  rate,
  isFixedButton,
}: {
  item: Item;
  bones: boolean;
  rate: boolean;
  isFixedButton: boolean;
}) {
  const { image, rating, id, title, price } = item;
  const { cartItems, addItems } = useCart();
  const CurrencyFormater = ({ amount }: { amount: number }) => {
    const formattedAmount = numeral(amount).format("$0,0.00");
    return formattedAmount;
  };

  const { wishlistItems, addItem, removeItem } = useWishlist();

  const isInWishlist = wishlistItems[id] || false;

  const handleWishlistToggle = (itemId: number) => {
    if (isInWishlist) {
      removeItem(itemId);
    } else {
      addItem(itemId);
    }
  };

  const isInCart = cartItems[id] || false;
  // console.log("isInCart", isInCart);
  // console.log("cartItems items Key", Object.keys(cartItems));
  const handleAddToCart = (id: number) => {
    addItems(id);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4 relative shadow-md group">
      <div className="h-[300px] w-[190px] flex items-center justify-center relative ">
        <Link to={`/`} className="mb-6">
          <img
            src={image}
            alt={title}
            className="h-[180px] w-full object-contain "
          />
        </Link>
      </div>
      {!isInCart && (
        <button
          onClick={() => handleAddToCart(id)}
          className={`w-full flex justify-center items-center bg-black text-white left-0 absolute ${
            isFixedButton ? "opacity-100 h-10" : "opacity-0"
          }  top-64  py-2  group-hover:opacity-100 transition-opacity duration-300`}
        >
          {isFixedButton && (
            <img src={white_cart} alt="" className="w-6 mr-4" />
          )}
          Add to Cart
        </button>
      )}

      {bones && (
        <p className="absolute top-2 left-2 p-2 bg-red-500 text-white text-xs rounded">
          -35%
        </p>
      )}
      <span className="absolute top-2 right-2 flex flex-col gap-2">
        <button
          onClick={() => handleWishlistToggle(id)}
          className={`flex justify-center items-center border w-8 h-8 rounded-full ${
            isInWishlist && !isFixedButton
              ? "bg-red-500 "
              : "bg-white hover:bg-gray-200"
          }`}
        >
          <img
            src={
              isFixedButton ? delete_icon : isInWishlist ? white_heart : heart
            }
            alt="wishlist icon"
            className="w-6"
          />
        </button>

        {!isFixedButton && (
          <button className="flex hover:bg-gray-200 justify-center items-center border w-8 h-8 rounded-full bg-white">
            <img src={eye} alt="" className="w-6" />
          </button>
        )}
      </span>
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
        {rating && rate && (
          <span className="flex items-center gap-2">
            <Rating value={rating?.rate} precision={0.1} size="small" />
            <small className="text-gray-500 text-sm font-semibold">
              ({rating?.count})
            </small>
          </span>
        )}
      </div>
    </div>
  );
}
