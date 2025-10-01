
import axios from "axios";

const api = axios.create({
  // If your PHP backend lives on another host, set baseURL here:
  // baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: { "Accept": "application/json" }
});

export default api;
