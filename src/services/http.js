import axios from "axios";
import { API_DOMAIN } from "../constants/schema";

export const http = axios.create({
  baseURL: API_DOMAIN,
});
