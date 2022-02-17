import React from "react";
import "../../styles/footer/rightFooterSide.scss";

const RightFooterSide: React.FC = () => {
  return (
    <div className="rightFooterDiv">
      <h2>Contact</h2>
      <div className="contactPhone">
        <i className="bi bi-telephone"></i>
        <p>555 666 777</p>
      </div>
      <div className="contactEmail">
        <i className="bi bi-envelope"></i>
        <p>webshop@webshop.pl</p>
      </div>
      <div className="contactGeo">
        <i className="bi bi-geo-alt"></i>
        <p>Frontend street 48th</p>
      </div>
      <div className="contactIcons">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
      </div>
    </div>
  );
};

export default RightFooterSide;
