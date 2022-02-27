import axios from "axios";
import { Console } from "../interfaces/ConsoleInterface";
import { Product } from "../interfaces/ProductInterface";

export const fetchAndSetProductsFunc = async (productType: string | undefined, setProducts: React.Dispatch<React.SetStateAction<Console[]>> | React.Dispatch<React.SetStateAction<Product[]>>) => {

  const response = await axios.get(`http://localhost:3000/${productType}`);

  setProducts(response.data)
};

export const fetchProducts = async (productType: string | undefined) => {

  const response = await axios.get(`http://localhost:3000/${productType}`);

  return response.data
};