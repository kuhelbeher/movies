import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
  headers: { Accept: 'application/json' },
});

export default axiosInstance;
