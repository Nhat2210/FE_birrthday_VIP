import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios'
import router from '@/router'

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
const axiosInsNoInterceptors = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosIns.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  const token = `Bearer ${localStorage.getItem("accessToken")}`
  config.headers.Authorization = token;
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosIns.interceptors.response.use(function (response: AxiosResponse<any>) {
  return response;
}, function (error) {
  if(error.response.status == 401){
    localStorage.removeItem('accessToken');
    router.push('/login');
  }
  return Promise.reject(error);
});

// export default axiosIns
export const api = axiosIns;
export const apiDefault = axiosInsNoInterceptors;
