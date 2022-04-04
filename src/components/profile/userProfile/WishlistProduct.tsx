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
        <h5 className="wishlistProductName">{props.name}</h5>
      </Link>
      <img className="searchResultImg" src={props.img} alt="img"></img>
      <h5 className="wishlistPrice">{props.price} $</h5>
    </div>
  );
};

export default WishlistProduct;
