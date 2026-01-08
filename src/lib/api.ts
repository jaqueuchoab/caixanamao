import axios from 'axios';
const bearerToken = import.meta.env.VITE_BEARER_TOKEN;

export const api = axios.create({
	baseURL: 'https://caixanamao-api.onrender.com/api',
	headers: { 
		'Content-Type': 'application/json', 
		authorization: `Bearer ${bearerToken}`,
	}
});
