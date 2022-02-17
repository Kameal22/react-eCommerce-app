import React from "react";
import "../../styles/websiteInfoStyles/websiteInfo.scss";

const WebsiteInfo: React.FC = () => {
  return (
    <div className="websiteInfoDiv">
      <h1>This component will contain info about this website</h1>
      <h2>
        Make for portfolio purposes, backend is very simple and i'm not apiring
        to be fullstack ATM etc.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
        voluptates, aut optio atque tenetur maxime! Laudantium est quis tenetur
        ullam?
      </p>
    </div>
  );
};

export default WebsiteInfo;
