import React, { createContext, useContext, useState } from "react";
import { WishlistInterface } from "../interfaces/WishlistInterface";

export const WishlistContext = createContext<WishlistInterface[]>([]);

export const SetWishlistContext = createContext<
  React.Dispatch<React.SetStateAction<WishlistInterface[]>> | undefined
>(undefined);

export const useSetWishlist = () => {
  const setWishlist = useContext(SetWishlistContext);

  if (!setWishlist) {
    throw new Error("Called outside setLW provider");
  }
  return setWishlist;
};

export const WishlistProvider: React.FC = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistInterface[]>([]);

  return (
    <WishlistContext.Provider value={wishlist}>
      <SetWishlistContext.Provider value={setWishlist}>
        {children}
      </SetWishlistContext.Provider>
    </WishlistContext.Provider>
  );
};
