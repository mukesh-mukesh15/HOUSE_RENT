import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

export const getProperties = () => API.get("/properties");
export default API;
