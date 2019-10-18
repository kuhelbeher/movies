import { Token } from '../types';
import axios from './api';

export const setAuthToken = (payload?: Token) => {
  if (payload) {
    const { tokenType, accessToken } = payload;
    axios.defaults.headers.Authorization = `${tokenType} ${accessToken}`;
  } else {
    delete axios.defaults.headers.Authorization;
  }
};
