import React from "react";
import "../../styles/lastWatchedStyles/lastWatchedProduct.scss";
import { Link } from "react-router-dom";
import { WishlistAndLastWatchedInterface } from "../../interfaces/LastWatchedInterface";

const LastWatchedProduct: React.FC<WishlistAndLastWatchedInterface> = (props) => {
  return (
    <div className="lastWatchedProduct">
      <Link
        className="productLink"
        to={`/specificResult/${props.category}/${props.id}`}
      >
        <h5 className="recProductName">{props.name}</h5>
      </Link>
      <img className="recProductImg" src={props.img} alt="img"></img>
      <h4 className="recProductPrice">{props.price} $</h4>
    </div>
  );
};

export default LastWatchedProduct;
