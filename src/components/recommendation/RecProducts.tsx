import React from "react";
import "../../styles/recommendationStyles/recProducts.scss";
import RecProduct from "./RecProduct";

const RecProducts: React.FC = () => {
  return (
    <div className="recProducts">
      <RecProduct />
      <RecProduct />
      <RecProduct />
      <RecProduct />
      <RecProduct />
      <RecProduct />
      <RecProduct />
      <RecProduct />
    </div>
  );
};

export default RecProducts;
