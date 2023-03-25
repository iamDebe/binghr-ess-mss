import axios from "axios";
import { decryptToken } from '@/utils/helpers';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the bearer token to the headers
api.interceptors.request.use(async (config) => {
  const token = await decryptToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const get = async (url) => {
  const resp = await api.get(url);
  return resp.data;
};

const post =async ({ url, data, config }) => {
  const resp = await api.post(url, data);
  return resp.data;
};

const methods = { get, post };

export default methods;
