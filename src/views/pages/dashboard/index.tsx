import { Sidebar } from './components/sidebar/Sidebar';
import { DashboardContainer, DashboardContent } from './styles';
import { BottomBar } from './components/mobileNavigation/bottomBar/BottomBar';
import { useWindowSize } from '@uidotdev/usehooks';
import { TopBar } from './components/mobileNavigation/topBar/TopBar';
import { SamplePage } from './SamplePage';
import {
	CastleTurretIcon,
	ChartBarIcon,
	LifebuoyIcon,
	GearIcon,
	HouseIcon,
} from '@phosphor-icons/react';
import { RegistersPage } from './registers';
import { Route, Routes, Navigate } from '@lib/router';
import { NewRegisterPage } from './registers/new';
import { EditRegisterPage } from './registers/edit';
import { useEffect, useState } from 'react';
import { ReportsPage } from './reports';
import { NewReportPage } from './reports/new';

export function DashboardPage() {
	const size = useWindowSize();
	const [isDeviceMobile, setIsDeviceMobile] = useState(size.width! < 768);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDeviceMobile(size.width! < 768);
		}, 100);
		return () => clearTimeout(timer);
	}, [size.width]);

	return (
		<DashboardContainer>
			{isDeviceMobile && <TopBar />}
			{isDeviceMobile ? <BottomBar /> : <Sidebar />}

			<DashboardContent>
				<Routes>
					<Route
						path='/'
						element={<Navigate to={'home'} replace />}
						key={'/dashboard/'}
					/>
					<Route
						path='/home'
						element={
							<SamplePage
								Icon={HouseIcon}
								pageTitle='Página Inicial'
							/>
						}
						key={'/dashboard/home'}
					/>
					<Route
						path='/registers'
						element={<RegistersPage />}
						key={'/dashboard/registers'}
					/>
					<Route
						path='/registers/new'
						element={<NewRegisterPage />}
						key={'/dashboard/registers/new'}
					/>
					<Route
						path='/registers/edit/:id'
						element={<EditRegisterPage />}
						key={'/dashboard/registers/edit/:id'}
					/>

					<Route
						path='/admin'
						element={
							<SamplePage
								Icon={CastleTurretIcon}
								pageTitle='Administração'
							/>
						}
						key={'/dashboard/admin'}
					/>
					<Route
						path='/reports'
						element={<ReportsPage />}
						key={'/dashboard/reports'}
					/>
					<Route
						path='/reports/new'
						element={<NewReportPage />}
						key={'/dashboard/reports/new'}
					/>
					<Route
						path='/analysis'
						element={
							<SamplePage
								Icon={ChartBarIcon}
								pageTitle='Análises'
							/>
						}
						key={'/dashboard/analysis'}
					/>
					<Route
						path='/help'
						element={
							<SamplePage Icon={LifebuoyIcon} pageTitle='Ajuda' />
						}
						key={'/dashboard/help'}
					/>
					<Route
						path='/settings'
						element={
							<SamplePage
								Icon={GearIcon}
								pageTitle='Configurações'
							/>
						}
						key={'/dashboard/settings'}
					/>
				</Routes>
			</DashboardContent>
		</DashboardContainer>
	);
}
