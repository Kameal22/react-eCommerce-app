import React, { useEffect, useState } from "react";
import "../../styles/searchBarStyles/searchBar.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ProductTypesArray } from "../../utills/ProductTypes";
import SearchBarLink from "./SearchBarLink";

const SearchBar: React.FC = () => {
  const [productTypes] = useState(ProductTypesArray);
  const [navActive, setNavActive] = useState(false);

  const activateNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <div className={navActive ? "searchBarActive" : "searchBar"}>
        {productTypes.map((type) => {
          return (
            <SearchBarLink
              key={type.name}
              name={type.name}
              iconClass={type.icon}
              dropdowns={type.dropdowns}
            />
          );
        })}
      </div>
      <div onClick={() => activateNav()} className="hamburger">
        <div className="firstLine"></div>
        <div className="scdLine"></div>
        <div className="thirdLine"></div>
      </div>
    </div>
  );
};

export default SearchBar;
