import React from "react";
import "../../styles/cartStyles/aditionalCartInfo.scss";

const AditionalCartInfo: React.FC = () => {
  return (
    <div className="aditionalCartInfoDiv">
      <div className="safeShopping">
        <i className="bi bi-lock"></i>
        <h4>Safe shopping</h4>
      </div>
      <div className="return">
        <i className="bi bi-arrow-counterclockwise"></i>
        <h4>15 days to return</h4>
      </div>
      <div className="technicalSupport">
        <i className="bi bi-headset"></i>
        <h4>Technical support</h4>
      </div>
    </div>
  );
};

export default AditionalCartInfo;
