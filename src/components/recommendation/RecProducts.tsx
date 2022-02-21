import React, { useEffect, useState } from "react";
import "../../styles/recommendationStyles/recProducts.scss";
import RecProduct from "./RecProduct";
import { fetchProductsFunc } from "../../utills/FetchProductsFunc";
import { Console } from "../../interfaces/ConsoleInterface";

const RecProducts: React.FC = () => {
  const [recProducts, setRecProducts] = useState<Console[]>([]);

  useEffect(() => {
    fetchProductsFunc("consoles", setRecProducts)
  }, []);

  return (
    <div className="recProducts">
      {recProducts.map(product => {
        return (
          <RecProduct name={product.name} brand={product.brand} price={product.price} img={product.img} />
        )
      })}
    </div>
  );
};

export default RecProducts;
