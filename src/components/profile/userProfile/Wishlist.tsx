import React, { useContext, useState, useEffect } from "react";
import Footer from "../../footer/Footer";
import NavLogo from "../../nav/NavLogo";
import "../../../styles/profileStyles/wishlist.scss";
import { WishlistAndLastWatchedInterface } from "../../../interfaces/LastWatchedInterface";
import { WishlistContext } from "../../../contexts/WishListContext";
import WishlistProduct from "./WishlistProduct";

const Wishlist: React.FC = () => {
  const wishlistContext = useContext(WishlistContext);

  const [wishlist, setWishlist] = useState<WishlistAndLastWatchedInterface[]>([]);

  useEffect(() => {
    setWishlist(wishlistContext);
  }, [wishlistContext]);

  return (
    <div className="wishlist">
      <div className="shortPageNav">
        <NavLogo />
      </div>
      {wishlist.length > 0 ? <h3 className="wishlistHeading">Your wishlist</h3> : <h3 className="emptyWishlist">Wishlist is empty</h3>}

      <div className="wishlistDiv">
        {wishlist.map((product) => {
          return (
            <WishlistProduct
              name={product.name}
              img={product.img}
              price={product.price}
              category={product.category}
              id={product.id}
              key={product.id}
            />
          );
        })}
      </div>
      <div className="cartFooterDiv">
        <Footer />
      </div>
    </div>
  );
};

export default Wishlist;
