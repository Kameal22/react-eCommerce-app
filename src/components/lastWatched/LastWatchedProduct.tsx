import React from "react";
import "../../styles/lastWatchedStyles/lastWatchedProduct.scss";
import { Link } from "react-router-dom";

interface latelyWatched {
  name: string;
  img: string;
  price: number;
  category: string;
  id: string;
}

const LastWatchedProduct: React.FC<latelyWatched> = (props) => {
  return (
    <div className="lastWatchedProduct">
      <Link
        className="productLink"
        to={`/specificResult/${props.category}/${props.id}`}
      >
        <h2 className="recProductName">{props.name}</h2>
      </Link>
      <img className="recProductImg" src={props.img}></img>
      <h4 className="recProductPrice">{props.price} $</h4>
    </div>
  );
};

export default LastWatchedProduct;
