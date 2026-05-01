import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
Attach token automatically
*/
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/*
REQUEST DEMO
*/
export const requestDemoAPI = async (data: {
  company: string;
  email: string;
  country: string;
}) => {
  const res = await api.post("/demo/request", data);
  return res.data;
};

/*
CONTACT API
*/
export const contactAPI = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const res = await api.post("/contact", data);
  return res.data;
};

export default api;

