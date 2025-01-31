import { api } from '../lib/api';

async function fetchUsersList() {
	try {
		return await api('cnm-api/users');
	} catch (error) {
		// somente para periodo de desenvolvimento
		alert(error);
	}
}

export { fetchUsersList };
