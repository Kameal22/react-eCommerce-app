import React, { useContext } from "react";
import "../../styles/navStyles/navMenu.scss";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";

const NavMenu: React.FC = () => {
  const loggedIn = useContext(LoggedInContext);

  if(loggedIn){
    return(
      <div className="navMenu">
      <div className="createAccDiv">
        <Link to="/register" className="navLink">
          <h4 className="navMenuLink">Your account</h4>
        </Link>
        <i className="bi bi-person"></i>
      </div>
      <div className="logInDiv">
        <Link to="/login" className="navLink">
          <h4 className="navMenuLink">Wishlist</h4>
        </Link>
        <i className="bi bi-heart"></i>
      </div>
      <div className="cartDiv">
        <Link to="/cart" className="navLink">
          <h4 className="navMenuLink">Cart</h4>
        </Link>
        <i className="bi bi-cart"></i>
      </div>
    </div>
    )
  } else{
  return (
    <div className="navMenu">
      <div className="createAccDiv">
        <Link to="/register" className="navLink">
          <h4 className="navMenuLink">Create account</h4>
        </Link>
        <i className="bi bi-person"></i>
      </div>
      <div className="logInDiv">
        <Link to="/login" className="navLink">
          <h4 className="navMenuLink">Log in</h4>
        </Link>
        <i className="bi bi-key"></i>
      </div>
      <div className="cartDiv">
        <Link to="/cart" className="navLink">
          <h4 className="navMenuLink">Cart</h4>
        </Link>
        <i className="bi bi-cart"></i>
      </div>
    </div>
  );
  }
};

export default NavMenu;
