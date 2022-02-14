import React from "react";
import "../../styles/advBannerStyles/advBanner.scss";

const AdvBanner: React.FC = () => {
  return (
    <div className="advBanner">
      <h1>Helping banner</h1>
      <h1>
        I will write some not-at-first visible technical features of this
        website
      </h1>
      <h1>Then user can check them out</h1>
    </div>
  );
};

export default AdvBanner;
