import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
const bearerToken = import.meta.env.VITE_BEARER_TOKEN;

export const api = axios.create({
	baseURL: apiUrl,
	headers: {
		'Content-Type': 'application/json',
		authorization: `Bearer ${bearerToken}`,
	},
});
