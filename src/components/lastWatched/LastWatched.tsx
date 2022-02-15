import React from "react";
import "../../styles/lastWatchedStyles/lastWatched.scss";
import LastWatchedProduct from "./LastWatchedProduct";

const LastWatched: React.FC = () => {
  return (
    <div className="lastWatchedDiv">
      <LastWatchedProduct />
      <LastWatchedProduct />
      <LastWatchedProduct />
      <LastWatchedProduct />
    </div>
  );
};

export default LastWatched;
