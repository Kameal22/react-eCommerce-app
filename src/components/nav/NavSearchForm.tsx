import React from "react";
import "../../styles/navStyles/navSearchForm.scss";
const NavSearchForm: React.FC = () => {
  return (
    <div className="navSearchForm">
      <h1>Search form</h1>
      <i className="bi bi-search" style={{ fontSize: "1.2em" }}></i>
    </div>
  );
};

export default NavSearchForm;
