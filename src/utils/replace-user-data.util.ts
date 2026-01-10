import { User } from '@/models/user.model';
import { useFormStore } from '@/views/store/user.store';

export function replaceUserData(data: {
	accessToken: string;
	user: Omit<User, 'senha'>;
}) {
	useFormStore.getState().setUser(data.user);

	localStorage.setItem('userId', data.user.iduser);
	sessionStorage.setItem('accessToken', data.accessToken);
}
