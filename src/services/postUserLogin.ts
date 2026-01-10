import { User } from '@/models/user.model';
import { LoginData, SignUpData } from '../@types/user-types';
import { api } from '../lib/api';

export async function postUserLogin(data: LoginData): Promise<{
	accessToken: string;
	refreshToken: string;
	user: Omit<User, 'senha'>;
}> {
	const response = await api.post('/auth/login', data);
	return response.data;
}

export async function postUserSignup(data: SignUpData): Promise<{
	accessToken: string;
	refreshToken: string;
	user: Omit<User, 'senha'>;
}> {
	const response = await api.post('/auth/register', data);
	return response.data;
}
