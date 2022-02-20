import axios from "axios";

export const fetchProductsFunc = async (productType: String, setProducts: React.Dispatch<React.SetStateAction<never[]>>) => {
  const response = await axios.get(`http://localhost:3000/${productType}`);

  setProducts(response.data);
};