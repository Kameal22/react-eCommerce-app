import React, { useState } from "react";
import "../../styles/searchBarStyles/searchBarLink.scss";
import { Link } from "react-router-dom";

interface searchBarProps {
  name: string;
  iconClass: string;
  dropdowns: { name: string; category: string; idx: number }[] | { name: string; category: string; idx: string }[];
}

const SearchBarLink: React.FC<searchBarProps> = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div onMouseEnter={() => setDropdownActive(true)} onMouseLeave={() => setDropdownActive(false)} className="searchBarLinkDiv">
      <Link
        className="searchBarLink"
        to={`/searchResult/${props.name}`}
      >
        <i className={props.iconClass} style={{ fontSize: "1.4em" }}></i>
        <p>{props.name}</p>
      </Link>
      {dropdownActive ? <div className={'dropdownDiv'}>
        {props.dropdowns.map((dropdown) => {
          return <p className="dropdownItem"><Link to={`/searchResult/${props.name}/${dropdown.category}/${dropdown.idx}`}>{dropdown.name}</Link></p>
        })}
      </div> : null}

    </div>
  );
};

export default SearchBarLink;
