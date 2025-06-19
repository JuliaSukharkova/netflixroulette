import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api",
  headers: {
    "X-API-KEY": apiKey,
    "Content-Type": "application/json",
  },
});

export default api;
