import React from "react";
import "../../styles/advBannerStyles/advBanner.scss";
import { useNavigate } from "react-router-dom";

const Proceed: React.FC = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate(`/`, { replace: true });
  }, 2000)

  return (
    <div className="advBanner">
      <h1>Hope you enjoyed</h1>
    </div>
  );
};

export default Proceed;
