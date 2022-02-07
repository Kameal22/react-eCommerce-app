import React from "react";
import AdvBanner from "../banner/AdvBanner";
import Nav from "../nav/Nav";
import RecProducts from "../recommendation/RecProducts";
import SearchBar from "../searchBar/SearchBar";
import WebsiteInfo from "../websiteInfo/WebsiteInfo";
import "../../styles/mainView/mainView.scss";
import Footer from "../footer/Footer";

const LandingView: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <AdvBanner />
      <RecProducts />
      <WebsiteInfo />
      <Footer />
    </div>
  );
};

export default LandingView;
