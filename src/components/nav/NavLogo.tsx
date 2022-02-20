import React from "react";
import "../../styles/navStyles/navLogo.scss";
import { Link } from "react-router-dom";
const NavLogo: React.FC = () => {
  const logo: string = `Web-Shop/>`;

  return (
    <div className="navLogo">
      <Link to="/" className="logoLink">
        <h1>{logo}</h1>
      </Link>
    </div>
  );
};

export default NavLogo;
