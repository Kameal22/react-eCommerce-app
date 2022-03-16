import React from "react";
import "../../../styles/profileStyles/wishlistProduct.scss";
import { Link } from "react-router-dom";

interface wishlistInterface {
  name: string;
  img: string;
  price: number;
  category: string;
  id: string;
}

const WishlistProduct: React.FC<wishlistInterface> = (props) => {
  return (
    <div className="wishlistProduct">
      <Link
        className="productLink"
        to={`/specificResult/${props.category}/${props.id}`}
      >
        <h2 className="wishlistProductName">{props.name}</h2>
      </Link>
      <img className="wishlistImg" src={props.img}></img>
      <p className="wishlistPrice">{props.price} $</p>
    </div>
  );
};

export default WishlistProduct;
