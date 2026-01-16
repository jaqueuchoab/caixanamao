import { useUserStore } from '@/views/store/user.store';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

api.interceptors.request.use((config) => {
	const token = sessionStorage.getItem('accessToken');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (originalRequest.url.includes('/auth/refresh')) {
			return Promise.reject(error);
		}

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const { data } = await api.post('/auth/refresh');
				sessionStorage.setItem('accessToken', data.accessToken);
				originalRequest.headers.Authorization = `Bearer ${sessionStorage.getItem(
					'accessToken',
				)}`;
				return api(originalRequest);
			} catch {
				useUserStore.getState().reset();
				window.location.href = '/auth/login';
			}
		}
		return Promise.reject(error);
	},
);
