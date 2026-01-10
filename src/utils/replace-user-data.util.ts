import { User } from '@/models/user.model';

export function replaceUserData(data: {
	accessToken: string;
	refreshToken: string;
	user: Omit<User, 'senha'>;
}) {
	localStorage.removeItem('token');
	localStorage.removeItem('refreshToken');
	localStorage.removeItem('userId');
	localStorage.removeItem('userEmail');

	localStorage.setItem('token', data.accessToken);
	localStorage.setItem('refreshToken', data.refreshToken);
	localStorage.setItem('userId', data.user.iduser);
	localStorage.setItem('userEmail', data.user.email);
}
