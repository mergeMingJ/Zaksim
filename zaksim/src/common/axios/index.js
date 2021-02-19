import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",

    // 등등의 header
  },
  baseURL: "https://i4b108.p.ssafy.io/api", // baseUrl
});

export default axiosInstance;
