import axios from 'axios';

export const cochlearAPI = () => {
  const instance = axios.create({ baseURL: 'http://localhost:8080' });
  return instance;
};