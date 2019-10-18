/* eslint no-param-reassign: 0 */
import axios from 'axios';
import camelCase from 'camelcase-keys';
import snakeCase from 'snakecase-keys';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
  headers: { Accept: 'application/json' },
});

axiosInstance.interceptors.request.use(config => {
  config.data = snakeCase(config.data);

  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    response.data = camelCase(response.data, { deep: true });

    return response;
  },
  error => {
    error.response.data = camelCase(error.response.data, { deep: true });

    return Promise.reject(error);
  },
);

export default axiosInstance;
