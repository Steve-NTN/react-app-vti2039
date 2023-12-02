import axios from "axios";
import { API_DOMAIN } from "../constants/schema";
import { http } from "./http";

const getAllAccounts = (page = 1, limit = 10, search = "") => {
  return axios(
    `${API_DOMAIN}/accounts?page=${page}&limit=${limit}&search=${search}`
  );
};

const login = (data) => {
  return http.post(`/accounts/auth`, data);
};

const getProfile = () => {
  return http.get(`${API_DOMAIN}/accounts/profile`);
};

const signup = (data) => {
  return axios.post(`${API_DOMAIN}/accounts`, data);
};

const logout = () => {
  return http.post(`/accounts/logout`);
};

export { getAllAccounts, login, signup, getProfile, logout };
