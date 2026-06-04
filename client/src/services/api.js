import axios from "axios";

const API = axios.create({
  //baseURL: "http://localhost:5000/api",
  baseURL: "https://crowdfunding-platform-1t41.onrender.com/api"
});

export default API;