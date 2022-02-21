import React from "react";
import "../../styles/recommendationStyles/recProduct.scss";

interface RecProductProps {
  name: String,
  brand: String,
  price: Number,
  img: string,
}

const RecProduct: React.FC<RecProductProps> = props => {
  return (
    <div className="recProduct">
      <h2 className="recProductName">{props.name}</h2>
      <img className="recProductImg" src={props.img}></img>
      <h3 className="recProductBrand">{props.brand}</h3>
      <h4 className="recProductPrice">{props.price} $</h4>
    </div>
  );
};

export default RecProduct;
