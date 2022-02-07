import React from "react";
import "../../styles/navStyles/navMenu.scss";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  // If logged in - menu stays the same, if not - Create account, Log in, Cart
  return (
    <div className="navMenu">
      <h5>Your account</h5>
      <i className="bi bi-person"></i>
      <h5>Your wishlist</h5>
      <i className="bi bi-heart"></i>
      <h5>Cart</h5>
      <i className="bi bi-cart"></i>
    </div>
  );
};

export default NavMenu;
