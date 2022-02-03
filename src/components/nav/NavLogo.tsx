import React from "react";
import "../../styles/navStyles/navLogo.scss";

const NavLogo: React.FC = () => {
  const logo: string = `Web-Shop/>`;

  return (
    <div className="navLogo">
      <h1>{logo}</h1>
    </div>
  );
};

export default NavLogo;
