import axios from "axios";
import { API_DOMAIN } from "../constants/schema";

const getAllAccounts = (page=1, limit=10, search='') => {
  return axios(`${API_DOMAIN}/accounts?page=${page}&limit=${limit}&search=${search}`);
};

export { getAllAccounts };
