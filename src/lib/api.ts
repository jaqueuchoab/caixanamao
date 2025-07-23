import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://54.146.218.73:3000/cnm-api/',
	headers: { 'Content-Type': 'application/json' },
	withCredentials: false, // pode ser alterado no futuro para carregar credenciais de acesso
});
