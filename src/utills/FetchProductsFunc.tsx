import axios from "axios";
import { SetStateAction } from "react";
import { ProductInterface } from "../interfaces/ProductInterface";

export const fetchEverything = async (setProducts: React.Dispatch<React.SetStateAction<any[]>>) => {
  const response = await axios.get("http://localhost:3000/everything");

  const products: SetStateAction<any[]> = []

  response.data.forEach((product: any) => {
    product.forEach((prod: any) => {
      products.push(prod)
    })
  })

  setProducts(products)
}

export const fetchRecommendedProducts = async (setProducts: React.Dispatch<React.SetStateAction<any[]>>) => {
  const response = await axios.get("http://localhost:3000/everything");

  const products: SetStateAction<any[]> = []

  response.data.forEach((product: any) => {
    product.forEach((prod: any) => {
      products.push(prod)
    })
  })

  const recProducts = Array.from(new Set(products.sort(() => 0.5 - Math.random())))

  const selected = recProducts.slice(0, 5)

  setProducts(selected)
}

export const fetchAndSetProductsFunc = async (
  productType: string | undefined,
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
) => {
  const response = await axios.get(`http://localhost:3000/${productType}`);

  setProducts(response.data);
};

export const fetchAndFilterProductsFunc = async (
  productType: string | undefined,
  productCategory: string | number,
  productCategoryIdx: string | number | undefined,
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>
) => {
  const response = await axios.get(`http://localhost:3000/${productType}`);

  const filteredResponse = response.data.filter((product: any) => {
    return product[productCategory] == productCategoryIdx;
  });

  setProducts(filteredResponse)
};

export const fetchAndSetProductsFuncWithParams = async (
  productType: string | undefined,
  productId: string | undefined,
  setProduct: React.Dispatch<React.SetStateAction<ProductInterface | undefined>>
) => {
  const response = await axios.get(
    `http://localhost:3000/${productType}/${productId}`
  );

  setProduct(response.data);
};
