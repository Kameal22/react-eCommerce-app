import React from "react";
import AdvBanner from "../banner/AdvBanner";
import Nav from "../nav/Nav";
import RecProducts from "../recommendation/RecProducts";
import SearchBar from "../searchBar/SearchBar";
import WebsiteInfo from "../websiteInfo/WebsiteInfo";
import "../../styles/mainView/mainView.scss";
import Footer from "../footer/Footer";
import LastWatched from "../lastWatched/LastWatched";

const LandingView: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <AdvBanner />
      <RecProducts />
      <LastWatched />
      <WebsiteInfo />
      <Footer />
    </div>
  );
};

export default LandingView;
