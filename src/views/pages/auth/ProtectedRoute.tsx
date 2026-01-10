import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useFormStore } from '@/views/store/user.store';
import { api } from '@/lib/api';
import { ProtectedContainer } from './styles/ProtectedRoute.styles';
import { Spinner } from '@/views/components/ui/spinner/Spinner';

export function ProtectedRoute() {
	const { user, setUser } = useFormStore();
	const accessToken = sessionStorage.getItem('accessToken');
	const [isRehydrating, setIsRehydrating] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const rehydrate = async () => {
			const tokenInStorage = sessionStorage.getItem('accessToken');

			// Se não tem token no storage e nem no Zustand, não há sessão
			if (!tokenInStorage && !accessToken) {
				setIsRehydrating(false);
				return;
			}

			try {
				// Tentamos dar um refresh para pegar dados frescos do usuário
				// e um novo accessToken. O interceptor cuidará do resto.
				const { data } = await api.post('/auth/refresh');

				sessionStorage.setItem('accessToken', data.accessToken);
				sessionStorage.setItem('accesToken', data.accessToken);
				setUser(data.user);
			} catch (error) {
				console.error('Erro ao reidratar sessão:', error);
				sessionStorage.removeItem('accessToken');
			} finally {
				setIsRehydrating(false);
			}
		};

		// Se o usuário já está no Zustand, não precisa reidratar
		if (user.iduser) {
			setIsRehydrating(false);
		} else {
			rehydrate();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.iduser]);

	if (isRehydrating) {
		return (
			<ProtectedContainer>
				<Spinner />
				<p>Carregando sessão...</p>
			</ProtectedContainer>
		); // Substitua por um Spinner
	}

	// Se após a tentativa não temos usuário, manda para o login
	// Salvamos a rota atual (location) para redirecionar o usuário de volta após o login
	if (!user.iduser && !isRehydrating) {
		return <Navigate to='/auth/login' state={{ from: location }} replace />;
	}

	return <Outlet />; // Renderiza os filhos (Dashboard, etc)
}
