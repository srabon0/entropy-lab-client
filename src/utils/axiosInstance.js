// src/utils/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5000/", // Your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

// Request interceptor for adding authorization token
instance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default instance;


// src/utils/axiosInstance.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: "http://localhost:5000/", // Your API base URL
//   timeout: 10000, // Request timeout in milliseconds
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default instance;
