import {
	House,
	Notepad,
	CastleTurret,
	FileText,
	ChartBar,
	Lifebuoy,
	Gear,
} from '@phosphor-icons/react';
import { RouteObject } from 'react-router-dom';
import { SamplePage } from '../views/components/dashboard/SamplePage';

export const dashboardRoutes: RouteObject[] = [
	{
		path: '/home',
		element: (
			<SamplePage
				Icon={House}
				pageTitle='Página Inicial'
				key={'/dashboard/home'} // em rotas aninhadas, key deve ser a rota completa para evitar semelhancas
			/>
		),
	},
	{
		path: '/registers',
		element: (
			<SamplePage
				Icon={Notepad}
				pageTitle='Registros'
				key={'/dashboard/registers'}
			/>
		),
	},
	{
		path: '/admin',
		element: (
			<SamplePage
				Icon={CastleTurret}
				pageTitle='Administração'
				key={'/dashboard/admin'}
			/>
		),
	},
	{
		path: '/reports',
		element: (
			<SamplePage
				Icon={FileText}
				pageTitle='Relatórios'
				key={'/dashboard/reports'}
			/>
		),
	},
	{
		path: '/analysis',
		element: (
			<SamplePage
				Icon={ChartBar}
				pageTitle='Análises'
				key={'/dashboard/analysis'}
			/>
		),
	},
	{
		path: '/help',
		element: (
			<SamplePage Icon={Lifebuoy} pageTitle='Ajuda' key={'/dashboard/help'} />
		),
	},
	{
		path: '/settings',
		element: (
			<SamplePage
				Icon={Gear}
				pageTitle='Configurações'
				key={'/dashboard/settings'}
			/>
		),
	},
];
