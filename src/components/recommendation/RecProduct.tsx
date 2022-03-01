import React from "react";
import "../../styles/recommendationStyles/recProduct.scss";
import { Link } from "react-router-dom";

interface RecProductProps {
  name: string,
  brand: string,
  type: string,
  price: Number,
  _id: string,
  img: string,
}

const RecProduct: React.FC<RecProductProps> = props => {
  return (
    <div className="recProduct">
      <Link className="productLink" to={`/specificResult/${props.type}/${props._id}`}>
        <h2 className="recProductName">{props.name}</h2>
      </Link>
      <img className="recProductImg" src={props.img}></img>
      <h3 className="recProductBrand">{props.brand}</h3>
      <h4 className="recProductPrice">{props.price} $</h4>
    </div>
  );
};

export default RecProduct;
