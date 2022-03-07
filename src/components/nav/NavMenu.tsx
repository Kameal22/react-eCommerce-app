import React, { useContext } from "react";
import "../../styles/navStyles/navMenu.scss";
import { Link } from "react-router-dom";
import { Logout } from "../../utills/Logout";

const NavMenu: React.FC = () => {
  if (window.localStorage.user) {
    return (
      <div className="navMenu">
        <div className="createAccDiv">
          <Link to="/profile" className="navLink">
            <h4 className="navMenuLink">Profile</h4>
          </Link>
          <i className="bi bi-person" style={{ fontSize: "1.2em" }}></i>
        </div>
        <div className="logInDiv">
          <Link to="/wishlist" className="navLink">
            <h4 className="navMenuLink">Wishlist</h4>
          </Link>
          <i className="bi bi-heart" style={{ fontSize: "1.2em" }}></i>
        </div>
        <div className="cartDiv">
          <Link to="/cart" className="navLink">
            <h4 className="navMenuLink">Cart</h4>
          </Link>
          <i className="bi bi-cart" style={{ fontSize: "1.2em" }}></i>
        </div>
        <div
          className="logoutDiv"
          style={{ cursor: "pointer" }}
          onClick={Logout}
        >
          <h4 className="navLink">Logout</h4>
          <i className="bi bi-door-closed" style={{ fontSize: "1.2em" }}></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navMenu">
        <div className="createAccDiv">
          <Link to="/register" className="navLink">
            <h4 className="navMenuLink">Create account</h4>
          </Link>
          <i className="bi bi-person" style={{ fontSize: "1.3em" }}></i>
        </div>
        <div className="logInDiv">
          <Link to="/login" className="navLink">
            <h4 className="navMenuLink">Log in</h4>
          </Link>
          <i className="bi bi-key" style={{ fontSize: "1.3em" }}></i>
        </div>
        <div className="cartDiv">
          <Link to="/cart" className="navLink">
            <h4 className="navMenuLink">Cart</h4>
          </Link>
          <i className="bi bi-cart" style={{ fontSize: "1.3em" }}></i>
        </div>
      </div>
    );
  }
};

export default NavMenu;
