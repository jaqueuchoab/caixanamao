import { RouteObject } from 'react-router-dom';
import Home from '../views/components/home/Home';
import { Dashboard } from '../views/components/dashboard/Dashboard';
import Vantagens from '../views/components/Vantagens';
import Fallback from '../views/components/fallback/Fallback';
import AuthModeSelector from '../views/components/authMode/AuthModeSelector';

/**
 * @description Para melhor manutenibilidade, acrescente sempre novas rotas
 * ou arquivos de rota neste mesmo padrão :)
 */
export const mainRoutes: RouteObject[] = [
	/* Se existe login, vai direto para a dashboard, se não fica na Home */
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <AuthModeSelector />,
	},
	{
		path: '/register/*',
		element: <AuthModeSelector />,
	},
	{
		path: '/dashboard/*',
		element: <Dashboard />,
	},
	{
		path: '/benefits',
		element: <Vantagens />,
	},
	{
		// rota coringa
		path: '/fallback?',
		element: <Fallback />,
	},
];
