import React from "react";
import "../../styles/searchBarStyles/searchBar.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const SearchBar: React.FC = () => {
  return (
    <div className="searchBar">
      <div className="laptopsIcon">
        <i className="bi bi-pc-display"></i>
        <p>Laptops</p>
      </div>
      <div className="telephonesIcon">
        <i className="bi bi-phone"></i>
        <p>Telephones</p>
      </div>
      <div className="consolesIcon">
        <i className="bi bi-controller"></i>
        <p>Consoles</p>
      </div>
      <div className="processorsIcon">
        <i className="bi bi-cpu"></i>
        <p>Processors</p>
      </div>
      <div className="televisorsIcon">
        <i className="bi bi-tv"></i>
        <p>Televisors</p>
      </div>
      <div className="heaphonesIcon">
        <i className="bi bi-headphones"></i>
        <p>Headphones</p>
      </div>
    </div>
  );
};

export default SearchBar;
