import React from "react";
import "../../styles/navStyles/navMenu.scss";

const NavMenu: React.FC = () => {
  return (
    <div className="navMenu">
      <h5>Your account</h5>
      <h5>Your wishlist</h5>
      <h5>Cart</h5>
    </div>
  );
};

export default NavMenu;
