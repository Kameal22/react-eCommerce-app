import React, { useState } from "react";
import "../../styles/searchBarStyles/searchBarLink.scss";
import { Link } from "react-router-dom";

interface searchBarProps {
  name: string;
  iconClass: string;
  dropdowns: { name: string; idx: number }[] | { name: string; idx: string }[];
}

const SearchBarLink: React.FC<searchBarProps> = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownClassName, setDropdownClassName] =
    useState("inactiveDropdown");

  return (
    <div className="searchBarLinkDiv">
      <Link
        onMouseOver={() => setDropdownClassName("activeDropdown")}
        onMouseLeave={() => setDropdownClassName("inactiveDropdown")}
        className="searchBarLink"
        to={`/searchResult/${props.name}`}
      >
        <i className={props.iconClass} style={{ fontSize: "1.4em" }}></i>
        <p>{props.name}</p>
      </Link>
      <div
        onMouseOver={() => setDropdownClassName("activeDropdown")}
        onMouseLeave={() => setDropdownClassName("inactiveDropdown")}
        className={dropdownClassName}
      >
        <ul className="dropdownItemsList">
          {props.dropdowns.map((dropdown) => {
            return <li className="dropdownItem">{dropdown.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBarLink;
