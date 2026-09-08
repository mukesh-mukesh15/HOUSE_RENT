import axios from "axios";

// If VITE_API_URL is set (e.g. on Vercel: https://<your-render-app>.onrender.com),
// normalize it so it always routes to /api
const envUrl = import.meta.env.VITE_API_URL?.trim();

const baseURL = envUrl
  ? (envUrl.endsWith("/api") ? envUrl : `${envUrl.replace(/\/+$/, "")}/api`)
  : "/api";

const API = axios.create({
  baseURL,
});

export const getProperties = () => API.get("/properties");
export default API;

