import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://caixanamao-api.onrender.com/api',
	headers: { 'Content-Type': 'application/json'}
});
