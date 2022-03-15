import React, { useEffect, useState } from "react";
import "../../styles/recommendationStyles/recProducts.scss";
import RecProduct from "./RecProduct";
import { fetchAndSetProductsFunc } from "../../utills/FetchProductsFunc";
import { Product } from "../../interfaces/ProductInterface";

const RecProducts: React.FC = () => {
  const [recProducts, setRecProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAndSetProductsFunc("consoles", setRecProducts)
  }, []);

  return (
    <div>
      <p className="info">We recommend</p>
      <div className="recProducts">
        {recProducts.map(product => {
          return (
            <RecProduct key={product.name} _id={product._id} name={product.name} brand={product.brand} type={product.category} price={product.price} img={product.img} />
          )
        })}
      </div>
    </div>
  );
};

export default RecProducts;
