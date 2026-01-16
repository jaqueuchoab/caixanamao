import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserStore } from '@/views/store/user.store';
import { api } from '@/lib/api';
import { ProtectedContainer } from './styles/ProtectedRoute.styles';
import { Spinner } from '@/views/components/ui/spinner/Spinner';

export function ProtectedRoute() {
	const { user, setUser } = useUserStore();
	const [isLoading, setIsLoading] = useState(!user.iduser);
	const location = useLocation();

	useEffect(() => {
		const verifySession = async () => {
			const hasToken = sessionStorage.getItem('accessToken');

			if (user.iduser || !hasToken) {
				setIsLoading(false);
				return;
			}

			try {
				const { data } = await api.post('/auth/refresh');
				sessionStorage.setItem('accessToken', data.accessToken);
				setUser(data.user);
			} catch {
				sessionStorage.removeItem('accessToken');
				useUserStore.getState().reset();
			} finally {
				setIsLoading(false);
			}
		};

		verifySession();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return (
			<ProtectedContainer>
				<Spinner />
				<p>Verificando acesso...</p>
			</ProtectedContainer>
		);
	}

	return user.iduser ? (
		<Outlet />
	) : (
		<Navigate to='/auth/login' state={{ from: location }} replace />
	);
}
