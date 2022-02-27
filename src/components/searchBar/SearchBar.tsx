import React, { useState } from "react";
import "../../styles/searchBarStyles/searchBar.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ProductTypesArray } from "../../utills/ProductTypes";
import SearchBarLink from "./SearchBarLink";

const SearchBar: React.FC = () => {
  const [productTypes] = useState(ProductTypesArray);
  return (
    <div className="searchBar">
      {productTypes.map(type => {
        return (
          <SearchBarLink key={type.name} name={type.name} iconClass={type.icon} />
        )
      })}
    </div>
  );
};

export default SearchBar;
