import axios from "axios";
import { Product } from "../interfaces/ProductInterface";

export const fetchAndSetProductsFunc = async (
  productType: string | undefined,
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  const response = await axios.get(`http://localhost:3000/${productType}`);

  setProducts(response.data);
};

export const fetchAndFilterProductsFunc = async (
  productType: string | undefined,
  productCategory: string | number,
  productCategoryIdx: string | number | undefined,
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
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
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
) => {
  const response = await axios.get(
    `http://localhost:3000/${productType}/${productId}`
  );

  setProduct(response.data);
};

export const fetchProducts = async (productType: string | undefined) => {
  const response = await axios.get(`http://localhost:3000/${productType}`);

  return response.data;
};

export const fetchSpecificProduct = async (
  productType: string | undefined,
  productId: string | undefined
) => {
  const response = await axios.get(
    `http://localhost:3000/${productType}/${productId}`
  );

  console.log(response.data);
};
