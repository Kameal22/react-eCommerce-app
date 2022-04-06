import React, { createContext, useContext, useEffect, useState } from "react";
import { CartInterface } from "../interfaces/CartInterface";

export const CartContext = createContext<CartInterface[]>([])

export const SetCartContext = createContext<
  React.Dispatch<React.SetStateAction<CartInterface[]>> | undefined>(undefined);

export const useSetCart = () => {
  const setCart = useContext(SetCartContext);

  if (!setCart) {
    throw new Error('Called outside setCartContext provider')
  }
  return setCart
}

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartInterface[]>([]);

  useEffect(() => {
    const cart = window.localStorage.getItem('cart');

    if (cart) {
      setCartItems(JSON.parse(cart))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={cartItems}>
      <SetCartContext.Provider value={setCartItems}>
        {children}
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
};