import React from "react";
import "../../styles/websiteInfoStyles/websiteInfo.scss";

const WebsiteInfo: React.FC = () => {
  return (
    <div className="websiteInfoDiv">
      <h2 className="firstWebsiteInfo">
        This website is created for front end portfolio purposes.
      </h2>
      <h3 className="scdWebsiteInfo">
        Both backend and frontend were developed by myself, but it's mostly
        about showing my front end skills to seek for a job oportunity.
      </h3>
      <p className="thirdWebsiteInfo">
        This is my biggest project so far, it contains all my skillset combined.
        I'm always looking to improve my programming skills and I'd love to
        learn from expierienced developers in a company
      </p>
    </div>
  );
};

export default WebsiteInfo;
