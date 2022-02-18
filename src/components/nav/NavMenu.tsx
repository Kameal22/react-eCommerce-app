import React, { useContext } from "react";
import "../../styles/navStyles/navMenu.scss";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";

const NavMenu: React.FC = () => {
  const loggedIn = useContext(LoggedInContext);

  if (loggedIn) {
    return (
      <div className="navMenu">
        <div className="createAccDiv">
          <Link to="/register" className="navLink">
            <h4 className="navMenuLink">Your account</h4>
          </Link>
          <i className="bi bi-person" style={{ fontSize: "1.3em" }}></i>
        </div>
        <div className="logInDiv">
          <Link to="/login" className="navLink">
            <h4 className="navMenuLink">Wishlist</h4>
          </Link>
          <i className="bi bi-heart" style={{ fontSize: "1.3em" }}></i>
        </div>
        <div className="cartDiv">
          <Link to="/cart" className="navLink">
            <h4 className="navMenuLink">Cart</h4>
          </Link>
          <i className="bi bi-cart" style={{ fontSize: "1.3em" }}></i>
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
