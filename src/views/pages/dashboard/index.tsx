import { Sidebar } from './components/sidebar/Sidebar';
import { DashboardContainer, DashboardContent } from './styles';
import { BottomBar } from './components/mobileNavigation/bottomBar/BottomBar';
import { useWindowSize } from '@uidotdev/usehooks';
import { TopBar } from './components/mobileNavigation/topBar/TopBar';
import { AnimatePresence } from '@lib/motion';
import { SamplePage } from './SamplePage';
import {
	CastleTurretIcon,
	FileTextIcon,
	ChartBarIcon,
	LifebuoyIcon,
	GearIcon,
	HouseIcon,
} from '@phosphor-icons/react';
import { RegistersPage } from './registers';
import { Route, Routes, Navigate } from '@lib/router';
import { NewRegisterPage } from './registers/new';
import { RegisterStepsContextProvider } from '@/views/context/RegisterStepsContext';

export function DashboardPage() {
	const size = useWindowSize();
	const isDeviceMobile = size.width! < 768;

	return (
		<DashboardContainer>
			{isDeviceMobile && <TopBar />}
			{isDeviceMobile ? <BottomBar /> : <Sidebar />}

			<DashboardContent>
				<AnimatePresence mode="wait">
					<Routes>
						<Route
							path="/"
							element={<Navigate to={'home'} replace />}
							key={'/dashboard/'}
						/>
						<Route
							path="/home"
							element={
								<SamplePage
									Icon={HouseIcon}
									pageTitle="Página Inicial"
								/>
							}
							key={'/dashboard/home'}
						/>
						<Route
							path="/registers"
							element={<RegistersPage />}
							key={'/dashboard/registers'}
						/>
						<Route
							path="/registers/new"
							element={
								<RegisterStepsContextProvider>
									<NewRegisterPage />
								</RegisterStepsContextProvider>
							}
							key={'/dashboard/registers/new'}
						/>

						<Route
							path="/admin"
							element={
								<SamplePage
									Icon={CastleTurretIcon}
									pageTitle="Administração"
								/>
							}
							key={'/dashboard/admin'}
						/>
						<Route
							path="/reports"
							element={
								<SamplePage
									Icon={FileTextIcon}
									pageTitle="Relatórios"
								/>
							}
							key={'/dashboard/reports'}
						/>
						<Route
							path="/analysis"
							element={
								<SamplePage
									Icon={ChartBarIcon}
									pageTitle="Análises"
								/>
							}
							key={'/dashboard/analysis'}
						/>
						<Route
							path="/help"
							element={
								<SamplePage
									Icon={LifebuoyIcon}
									pageTitle="Ajuda"
								/>
							}
							key={'/dashboard/help'}
						/>
						<Route
							path="/settings"
							element={
								<SamplePage
									Icon={GearIcon}
									pageTitle="Configurações"
								/>
							}
							key={'/dashboard/settings'}
						/>
					</Routes>
				</AnimatePresence>
			</DashboardContent>
		</DashboardContainer>
	);
}
