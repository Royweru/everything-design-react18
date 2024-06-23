import axios from "axios";
import { ACCESS_TOKEN } from "@/constants";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Function to conditionally add the Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    // Only add the token for specific endpoints if needed
    if (
      token &&
      !config.url.includes("/api/email-message/" || "/api/product/")
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
