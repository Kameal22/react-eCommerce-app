import React from "react";
import "../../styles/navStyles/navMenu.scss";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  // If logged in - menu stays the same, if not - Create account, Log in, Cart
  return (
    <div className="navMenu">
      <div className="yourAccDiv">
        <h5>Your account</h5>
        <i className="bi bi-person"></i>
      </div>
      <div className="yourWishDiv">
        <h5>Your wishlist</h5>
        <i className="bi bi-heart"></i>
      </div>
      <div className="cartDiv">
        <h5>Cart</h5>
        <i className="bi bi-cart"></i>
      </div>
    </div>
  );
};

export default NavMenu;
