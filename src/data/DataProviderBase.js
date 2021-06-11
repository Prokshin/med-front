import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      if (window.location.pathname !== '/login' && window.location.pathname !== '/reg') {
        toast.error(
          'ошибка авторизации, войдите в приложение снова',
        );
        window.location.replace('/login');
      }
    } else {
      toast.error(
        error.response?.data?.info?.error || 'ошибка при получении данных, повоторите попытку позднее',
      );
    }

    return Promise.reject(error.response?.data);
  },
);

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export const httpService = axiosInstance;
