import React from "react";
import "../../styles/navStyles/navMenu.scss";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  // If logged in - menu stays the same, if not - Create account, Log in, Cart
  return (
    <div className="navMenu">
      <div className="yourAccDiv">
        <Link to="/register" className="navLink">
          <h5 className="navMenuLink">Create account</h5>
        </Link>
        <i className="bi bi-person"></i>
      </div>
      <div className="yourWishDiv">
        <Link to="/login" className="navLink">
          <h5 className="navMenuLink">Log in</h5>
        </Link>
        <i className="bi bi-heart"></i>
      </div>
      <div className="cartDiv">
        <Link to="/cart" className="navLink">
          <h5 className="navMenuLink">Cart</h5>
        </Link>
        <i className="bi bi-cart"></i>
      </div>
    </div>
  );
};

export default NavMenu;
