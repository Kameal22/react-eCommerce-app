import React from "react";
import "../../styles/advBannerStyles/advBanner.scss";

const AdvBanner: React.FC = () => {
  return (
    <div data-testid="advBanner" className="advBanner">
      <h1>Simple example of online shop</h1>
      <h2>
        Register, browse products, sort and filter them, add to cart, view
        latelty watched products
      </h2>
      <h3>
        Visit{" "}
        <a
          className="githubLink"
          target="_blank"
          href="https://github.com/Kameal22"
        >
          my Github
        </a>{" "}
        to view more projects
      </h3>
    </div>
  );
};

export default AdvBanner;
