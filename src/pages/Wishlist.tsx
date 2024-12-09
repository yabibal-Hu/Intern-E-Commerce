import axios from "axios";
import { useWishlist } from "../contexts/wishContext";
import ItemCard from "../components/item/ItemCard";
import { useEffect, useState } from "react";
import { Item } from "./types";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function Wishlist() {
  const { wishlistItems } = useWishlist();
  const { addItemsToCart } = useCart();
  const totalItems = Object.keys(wishlistItems);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [electronics, setElectronics] = useState<Item[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [bottomData, setBottomData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const filtered = response.data.filter((item: Item) =>
          totalItems.includes(item.id.toString())
        );
        setAllItems(response.data);
        setFilteredItems(filtered);
        setElectronics(
          response.data.filter((item: Item) => item.category === "electronics")
        );
      } catch (error) {
        console.error("Error fetching items:", error);
      }

      setLoading(false);
    };

    if (totalItems.length > 0) {
      fetchItems();
    }
  }, [totalItems]);

  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }


  if (totalItems.length === 0) {
    return (
      <div className=" p-32 text-center">
        <p className="text-2xl font-semibold mb-6">your wishlist is empty</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#DB4444] hover:bg-red-600 text-white px-10 py-4  rounded mt-4"
        >
          Shop Now
        </button>
      </div>
    );
  }



  return (
    <div className=" p-32">
      <section>
        <div className="flex justify-between items-center mb-10 ">
          <p className="text-lg">Wishlist ({totalItems.length})</p>
          <button
            onClick={() => addItemsToCart(filteredItems)}
            className="hover:bg-red-600 hover:text-white px-10 py-4 border-2  rounded "
          >
            Move All To Bagg
          </button>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {totalItems.length > 0 &&
            filteredItems.map((item: Item) => (
              <ItemCard
                key={item.id}
                item={item}
                isFixedButton={true}
                bones={false}
                rate={false}
              />
            ))}
        </div>
        <div className="flex justify-between items-center gap-2 mt-14 mb-8">
          <div className="flex gap-6">
            <div className="w-5 h-10 bg-red-500 rounded-md"></div>
            <div className="flex flex-col">
              <h1 className="text-xl mt-2">Just For You</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setBottomData(allItems)}
              className="hover:bg-red-600 hover:text-white px-10 py-4 border-2  rounded "
            >
              See All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {bottomData.length > 0
            ? bottomData.map((item, index) => (
                <ItemCard
                  key={index}
                  item={item}
                  bones={false}
                  rate={true}
                  isFixedButton={false}
                />
              ))
            : electronics.map((item, index) => (
                <ItemCard
                  key={index}
                  item={item}
                  bones={false}
                  rate={true}
                  isFixedButton={false}
                />
              ))}
        </div>
      </section>
    </div>
  );
}
