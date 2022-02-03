import React from "react";
import "../../styles/searchBarStyles/searchBar.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const SearchBar: React.FC = () => {
  return (
    <div className="searchBar">
      <i className="bi bi-pc-display"></i>
      <i className="bi bi-phone"></i>
      <i className="bi bi-controller"></i>
      <i className="bi bi-cpu"></i>
      <i className="bi bi-tv"></i>
      <i className="bi bi-headphones"></i>
    </div>
  );
};

export default SearchBar;
