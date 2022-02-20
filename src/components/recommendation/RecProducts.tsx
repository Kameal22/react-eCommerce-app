import React, { useEffect, useState } from "react";
import "../../styles/recommendationStyles/recProducts.scss";
import RecProduct from "./RecProduct";
import { fetchProductsFunc } from "../../utills/FetchProductsFunc";

const RecProducts: React.FC = () => {
  const [recProducts, setRecProducts] = useState<Array<string & number>>([]);

  useEffect(() => {
    fetchProductsFunc("laptops", setRecProducts)
  }, []);

  return (
    <div className="recProducts">
      <h1>TEST</h1>
    </div>
  );
};

export default RecProducts;
