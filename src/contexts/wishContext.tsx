"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistContextProps {
  wishlistItems: { [key: number]: boolean }; 
  addItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(
  undefined
);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<{
    [key: number]: boolean;
  }>({});

  // Function to add an item to the wishlist
  const addItem = (productId: number) => {
    setWishlistItems((prevWishlist) => ({
      ...prevWishlist,
      [productId]: true, 
    }));
  };

  // Function to remove an item from the wishlist
  const removeItem = (productId: number) => {
    setWishlistItems((prevWishlist) => {
      const updatedWishlist = { ...prevWishlist };
      delete updatedWishlist[productId]; 
      return updatedWishlist;
    });
  };

  // Function to clear the entire wishlist
  const clearWishlist = () => {
    setWishlistItems({});
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addItem, removeItem, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
