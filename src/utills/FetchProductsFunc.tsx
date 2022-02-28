import axios from "axios";
import { Console } from "../interfaces/ConsoleInterface";
import { Product } from "../interfaces/ProductInterface";

export const fetchAndSetProductsFunc = async (productType: string | undefined, setProducts: React.Dispatch<React.SetStateAction<Console[]>> | React.Dispatch<React.SetStateAction<Product[]>>) => {

  const response = await axios.get(`http://localhost:3000/${productType}`);

  setProducts(response.data)
};

export const fetchAndSetProductsFuncWithParams = async (productType: string | undefined, productId: string | undefined, setProduct: React.Dispatch<React.SetStateAction<Console[]>> | React.Dispatch<React.SetStateAction<Product[]>>) => {

  const response = await axios.get(`http://localhost:3000/${productType}/${productId}`);

  setProduct(response.data)
};

export const fetchProducts = async (productType: string | undefined) => {

  const response = await axios.get(`http://localhost:3000/${productType}`);

  return response.data
};

export const fetchSpecificProduct = async (productType: string | undefined, productId: string | undefined) => {

  const response = await axios.get(`http://localhost:3000/${productType}/${productId}`);

  console.log(response.data);
}