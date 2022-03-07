import React from "react";
import "../../styles/websiteInfoStyles/websiteInfo.scss";

const WebsiteInfo: React.FC = () => {
  return (
    <div className="websiteInfoDiv">
      <h3 className="firstWebsiteInfo">
        <span>This</span> website is created for front end portfolio purposes.
      </h3>
      <h4 className="scdWebsiteInfo">
        <span>Both</span> backend and frontend were developed by myself, but
        it's mostly about showing my front end skills to seek for a job
        oportunity.
      </h4>
      <p className="thirdWebsiteInfo">
        <span>This</span> is my biggest project so far, it contains all my
        skillset combined. I'm always looking to improve my programming skills
        and I'd love to learn from expierienced developers in a company
      </p>
    </div>
  );
};

export default WebsiteInfo;
