import React, { createContext, useContext, useState, useEffect } from "react";
import { WishlistAndLastWatchedInterface } from "../interfaces/LastWatchedInterface";

export const WishlistContext = createContext<WishlistAndLastWatchedInterface[]>([]);

export const SetWishlistContext = createContext<
  React.Dispatch<React.SetStateAction<WishlistAndLastWatchedInterface[]>> | undefined
>(undefined);

export const useSetWishlist = () => {
  const setWishlist = useContext(SetWishlistContext);

  if (!setWishlist) {
    throw new Error("Called outside setLW provider");
  }
  return setWishlist;
};

export const WishlistProvider: React.FC = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistAndLastWatchedInterface[]>([]);

  useEffect(() => {
    const wish = window.localStorage.getItem('wish');

    if (wish) {
      setWishlist(JSON.parse(wish))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('wish', JSON.stringify(wishlist))
  }, [wishlist])

  return (
    <WishlistContext.Provider value={wishlist}>
      <SetWishlistContext.Provider value={setWishlist}>
        {children}
      </SetWishlistContext.Provider>
    </WishlistContext.Provider>
  );
};
