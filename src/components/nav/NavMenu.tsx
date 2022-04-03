import "../../styles/navStyles/navMenu.scss";
import { Logout } from "../../utills/Logout";
import { NavMenuLogged, NavMenuNotLogged } from "../../utills/NavMenuData";
import NavMenuItem from "./NavMenuItem";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const NavMenu: React.FC = () => {
  const cart = useContext(CartContext);

  if (window.localStorage.user) {
    return (
      <div className="navMenu">
        {NavMenuLogged.map((options) => {
          return (
            <NavMenuItem
              linkPath={options.path}
              description={options.description}
              iconName={options.icon}
            />
          );
        })}
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
        {NavMenuNotLogged.map((options) => {
          return (
            <NavMenuItem
              linkPath={options.path}
              description={options.description}
              iconName={options.icon}
            />
          );
        })}
        {cart.length > 0 ? <p className="cartCount">{cart.length}</p> : null}
      </div>
    );
  }
};

export default NavMenu;
