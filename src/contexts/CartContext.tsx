import React, { createContext, useContext, useState } from "react";
import { CartInterface } from "../interfaces/CartInterface";

export const CartContext = createContext<CartInterface[]>([])

export const SetCartContext = createContext<
  React.Dispatch<React.SetStateAction<CartInterface[]>> | undefined
>(undefined);

export const useSetCart = () => {
  const setCart = useContext(SetCartContext);

  if (!setCart) {
    throw new Error('Called outside setCartContext provider')
  }
  return setCart
}

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartInterface[]>([]);

  return (
    <CartContext.Provider value={cartItems}>
      <SetCartContext.Provider value={setCartItems}>
        {children}
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
};