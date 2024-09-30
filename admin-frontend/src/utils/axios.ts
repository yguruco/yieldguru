import axios from 'axios';


// Set Axios global defaults
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true; // If using CSRF protection and tokens

// Create an Axios instance with default configuration
export const axiosBackendInstance = axios.create({
  baseURL: 'http://localhost:9000', // Set your base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});
