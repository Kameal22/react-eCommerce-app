import React from "react";
import "../../styles/navStyles/nav.scss";
import NavLogo from "./NavLogo";
import NavSearchForm from "./NavSearchForm";
import NavIcons from "./NavMenu";
import "bootstrap-icons/font/bootstrap-icons.css"; //Icons import, now it works

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <NavLogo />
      <NavSearchForm />
      <NavIcons />
    </div>
  );
};

export default Nav;
