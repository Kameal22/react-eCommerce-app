import axios from "axios";
import { Console } from "../interfaces/ConsoleInterface";

export const fetchProductsFunc = async (productType: String, setProducts: React.Dispatch<React.SetStateAction<Console[]>>) => {

  const response = await axios.get(`http://localhost:3000/${productType}`);

  setProducts(response.data)
};