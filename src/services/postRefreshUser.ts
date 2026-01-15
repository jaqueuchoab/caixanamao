import { api } from '@/lib/api';
import { User } from '@/models/user.model';
import { useUserStore } from '@/views/store/user.store';

export async function postRefreshUser() {
	const setUser = useUserStore.getState().setUser;

	try {
		const { data } = await api.post<{
			user: User;
			refreshToken: string;
			accessToken: string;
		}>('/auth/refresh');

		sessionStorage.setItem('accessToken', data.accessToken);
		setUser(data.user);
	} catch (e) {
		if (e instanceof Error) throw new Error(e.message);
	}
}
