import React, { useEffect, useState } from "react";
import "../../styles/recommendationStyles/recProducts.scss";
import RecProduct from "./RecProduct";
import { fetchRecommendedProducts } from "../../utills/FetchProductsFunc";
import { ProductInterface } from "../../interfaces/ProductInterface";

const RecProducts: React.FC = () => {
  const [recProducts, setRecProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    fetchRecommendedProducts(setRecProducts)
  }, []);

  return (
    <div>
      <p className="info">We recommend</p>
      <div className="recProducts">
        {recProducts.map(product => {
          return (
            <RecProduct key={product._id} _id={product._id} name={product.name} brand={product.brand} type={product.category} price={product.price} img={product.img} />
          )
        })}
      </div>
    </div>
  );
};

export default RecProducts;
