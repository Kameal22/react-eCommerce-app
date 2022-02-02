import React from "react";
import AdvBanner from "./components/banner/AdvBanner";
import Nav from "./components/nav/Nav";
import SearchBar from "./components/searchBar/SearchBar";
import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <AdvBanner />
    </div>
  );
};

export default App;
