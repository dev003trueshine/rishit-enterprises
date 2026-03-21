import axios from 'axios';
import { store } from '../store/store';
import { showLoader, hideLoader } from '../store/slices/loaderSlice';

const httpService = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', // Default host
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
httpService.interceptors.request.use(
    (config) => {
        store.dispatch(showLoader());
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        store.dispatch(hideLoader());
        return Promise.reject(error);
    }
);

// Response interceptor
httpService.interceptors.response.use(
    (response) => {
        store.dispatch(hideLoader());
        return response.data;
    },
    (error) => {
        store.dispatch(hideLoader());
        // Handle global errors like 401 Unauthorized
        if (error.response && error.response.status === 401) {
            // Logic for logout or refresh token
        }
        return Promise.reject(error);
    }
);

export default httpService;
