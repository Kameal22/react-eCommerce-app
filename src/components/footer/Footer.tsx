import React from "react";
import "../../styles/footer/footer.scss";
import LeftFooterSide from "./LeftFooterSide";
import MiddleFooterSide from "./MiddleFooterSide";
import RightFooterSide from "./RightFooterSide";

const Footer: React.FC = () => {
  return (
    <div className="footerDiv">
      <LeftFooterSide />
      <MiddleFooterSide />
      <RightFooterSide />
    </div>
  );
};

export default Footer;
