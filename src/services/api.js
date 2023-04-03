import axios from "axios";
import { decryptToken } from '@/utils/helpers';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the bearer token to the headers
api.interceptors.request.use(async (config) => {
  const token = await decryptToken();
  if (token) {
    console.log(token);
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  }
  //unauthenticated, redirect to login
  window.location.href = `${import.meta.env.VITE_BASE_URL}/login`;
});

const get = async (url) => {
  const resp = await api.get(url);
  return resp.data;
};

const post =async (url, data, config = {}) => {
  const resp = await api.post(url, data, config);
  return resp.data;
};

const put =async (url, data, config = {}) => {
  const resp = await api.put(url, data, config);
  return resp.data;
};

const methods = {get, post, put};

export default methods;
