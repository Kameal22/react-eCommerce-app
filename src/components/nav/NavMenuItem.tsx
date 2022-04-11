import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { summarizeCartItems } from "../../utills/CartUtils";

interface MenuItemProps {
  linkPath: string;
  description: string;
  iconName: string;
  key: string;
}

const NavMenuItem: React.FC<MenuItemProps> = (props) => {
  const cart = useContext(CartContext)

  return (
    <div className="createAccDiv">
      <Link to={props.linkPath} className="navLink">
        <h4 className="navMenuLink">{props.description}</h4>
      </Link>
      <i className={props.iconName} style={{ fontSize: "1.2em" }}></i>
      {props.description === 'Cart' && cart.length > 0 ? <p className="cartQty">{summarizeCartItems(cart)}</p> : null}
    </div>
  );
};

export default NavMenuItem;
