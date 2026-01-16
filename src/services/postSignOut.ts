import { api } from '@/lib/api';
import { useUserStore } from '@/views/store/user.store';

export async function postSignOut() {
	const resetUserData = useUserStore.getState().reset;

	try {
		sessionStorage.removeItem('accessToken');
		localStorage.removeItem('userId');
		resetUserData();
		await api.post('/auth/logout');
	} catch (error) {
		console.error('Erro ao deslogar no servidor', error);
	}
}
