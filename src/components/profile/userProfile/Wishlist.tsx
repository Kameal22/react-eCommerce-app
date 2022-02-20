import React from "react";
import Footer from "../../footer/Footer";
import NavLogo from "../../nav/NavLogo";
import "../../../styles/profileStyles/wishlist.scss";

const Wishlist: React.FC = () => {
  return (
    <div className="wishlist">
      <div className="registerNav">
        <NavLogo />
      </div>
      <div className="wishlistDiv">
        <h1>Your wishlist</h1>
      </div>
      <div className="cartFooterDiv">
        <Footer />
      </div>
    </div>
  );
};

export default Wishlist;
