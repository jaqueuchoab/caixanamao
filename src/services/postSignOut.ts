import { api } from '@/lib/api';
import { useFormStore } from '@/views/store/user.store';

export async function postSignOut() {
	const resetUserData = useFormStore.getState().reset;

	try {
		await api.post('/auth/logout');
		resetUserData();
		sessionStorage.removeItem('accessToken');
		localStorage.removeItem('userId');
	} catch (error) {
		console.error('Erro ao deslogar no servidor', error);
	}
}
