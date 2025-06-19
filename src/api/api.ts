import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apikey, 'api')
const api = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api",
  headers: {
    "X-API-KEY": apiKey,
    "Content-Type": "application/json",
  },
});

export default api;
