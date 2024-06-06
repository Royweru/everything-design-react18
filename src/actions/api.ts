import axios from "axios";
import { ACCESS_TOKEN } from "@/constants";

const api = axios.create({
  baseURL: process.env.VITE_API_URL as string,
});

console.log(api);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
