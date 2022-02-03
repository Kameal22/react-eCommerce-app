import React from "react";
import AdvBanner from "./components/banner/AdvBanner";
import Nav from "./components/nav/Nav";
import RecProducts from "./components/recommendation/RecProducts";
import SearchBar from "./components/searchBar/SearchBar";
import WebsiteInfo from "./components/websiteInfo/WebsiteInfo";
import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <AdvBanner />
      <RecProducts />
      <WebsiteInfo />
    </div>
  );
};

export default App;
