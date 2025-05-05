import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this based on your backend
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // if using cookie-based auth
});

export default api;
