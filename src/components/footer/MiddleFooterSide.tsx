import React from "react";
import "../../styles/footer/middleFooterSide.scss";

const MiddleFooterSide: React.FC = () => {
  const logo: string = `Web-Shop/>`;
  return (
    <div className="middleFooterDiv">
      <h2>{logo}</h2>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum amet.</p>
      <p>Lorem, ipsum dolor.</p>
      <p>Lorem ipsum dolor sit.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default MiddleFooterSide;
