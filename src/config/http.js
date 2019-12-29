import axios from 'axios';
import configureLocalStorage from '../redux/actions/utils/configureLocalStorage';

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL_PROD}/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    accept: 'Accept: application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const cnfg = config;
    const token = configureLocalStorage.getToken();
    if (token) cnfg.headers.Authorization = `Bearer ${token}`;
    return cnfg;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
