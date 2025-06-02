import axios from 'axios';

const Api = axios.create({
  baseURL: import.meta.env.DEV
    ? '/api'
    : 'https://laravelapi-production-64b8.up.railway.app/api',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Api;
