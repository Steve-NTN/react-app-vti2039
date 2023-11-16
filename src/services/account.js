import axios from "axios";
import { API_DOMAIN } from "../constants/schema";

const getAllAccounts = (page = 1, limit = 10, search = "") => {
  return axios(
    `${API_DOMAIN}/accounts?page=${page}&limit=${limit}&search=${search}`
  );
};

const login = (data) => {
  return axios.post(`${API_DOMAIN}/accounts/auth`, data);
};

const signup = (data) => {
  return axios.post(`${API_DOMAIN}/accounts`, data);
};


export { getAllAccounts, login, signup };
