import axios from "axios";

const API_URL = "Localhost:3000";

const registerUser = async (
  name: string,
  surname: string,
  email: string,
  password: string
) => {
  await axios.post(API_URL);
};

export { API_URL };
