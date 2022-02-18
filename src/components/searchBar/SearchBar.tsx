import React from "react";
import "../../styles/searchBarStyles/searchBar.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const SearchBar: React.FC = () => {
  return (
    <div className="searchBar">
      <div className="laptopsIcon">
        <i className="bi bi-pc-display" style={{ fontSize: "1.4em" }}></i>
        <p>Laptops</p>
      </div>
      <div className="telephonesIcon">
        <i className="bi bi-phone" style={{ fontSize: "1.4em" }}></i>
        <p>Telephones</p>
      </div>
      <div className="consolesIcon">
        <i className="bi bi-controller" style={{ fontSize: "1.4em" }}></i>
        <p>Consoles</p>
      </div>
      <div className="processorsIcon">
        <i className="bi bi-cpu" style={{ fontSize: "1.4em" }}></i>
        <p>Processors</p>
      </div>
      <div className="televisorsIcon">
        <i className="bi bi-tv" style={{ fontSize: "1.4em" }}></i>
        <p>Televisors</p>
      </div>
      <div className="heaphonesIcon">
        <i className="bi bi-headphones" style={{ fontSize: "1.4em" }}></i>
        <p>Headphones</p>
      </div>
    </div>
  );
};

export default SearchBar;
