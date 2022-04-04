import "../../styles/navStyles/navMenu.scss";
import { Logout } from "../../utills/Logout";
import { NavMenuLogged, NavMenuNotLogged } from "../../utills/NavMenuData";
import NavMenuItem from "./NavMenuItem";

const NavMenu: React.FC = () => {

  if (window.localStorage.user) {
    return (
      <div className="navMenu">
        {NavMenuLogged.map((options) => {
          return (
            <NavMenuItem
              key={options.description}
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
              key={options.description}
              linkPath={options.path}
              description={options.description}
              iconName={options.icon}
            />
          );
        })}
      </div>
    );
  }
};

export default NavMenu;
