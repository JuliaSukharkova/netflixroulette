import axios from "axios";

const api = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api",
  headers: {
    "X-API-KEY": process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json",
  },
});

export default api;
