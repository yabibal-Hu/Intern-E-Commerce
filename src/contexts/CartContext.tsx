"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Item } from "../pages/types";

interface CartContextProps {
  cartItems: { [key: number]: number };
  addItems: (productId: number) => void;
  removeItem: (productId: number) => void;
  addItemsToCart: (items: Item[]) => void;
  minusQuantity: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

  const addItemsToCart = (items: Item[]) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };

      items.forEach((item) => {
        if (!updatedCart[item.id]) {
          updatedCart[item.id] = 1;
        }
      });

      return updatedCart;
    });
  };

  // Function to add an item to the cart
  const addItems = (productId: number) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };
  //Function to remove one quantity of an item
  const minusQuantity = (productId: number) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };
  // Function to remove an item from the cart
  const removeItem = (productId: number) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };
  // Function to clear the cart
  const clearCart = () => {
    setCartItems({});
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemsToCart,
        addItems,
        removeItem,
        clearCart,
        minusQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
