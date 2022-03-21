import React from "react";
import "../../styles/navStyles/nav.scss";
import NavLogo from "./NavLogo";
import NavSearchForm from "./NavSearchForm";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavMenu from "./NavMenu";

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <NavLogo />
      <NavSearchForm />
      <NavMenu />
    </div>
  );
};

export default Nav;
