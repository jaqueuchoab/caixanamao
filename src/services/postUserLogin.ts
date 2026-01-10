import { LoginData, SignUpData } from '../@types/user-types';
import { api } from '../lib/api';

export async function postUserLogin(data: LoginData) {
	const response = await api.post('/auth/login', data);
	return response.data;
}

export async function postUserSignup(data: SignUpData) {
	const response = await api.post('/auth/register', data);
	return response.data;
}
