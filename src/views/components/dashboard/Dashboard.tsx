import { Sidebar } from '../sidebar/Sidebar';
import { DashboardContainer, DashboardContent } from './Dashboard.styles';
import { BottomBar } from '../mobileNavigation/bottomBar/BottomBar';
import { useWindowSize } from '@uidotdev/usehooks';
import { TopBar } from '../mobileNavigation/topBar/TopBar';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { dashboardRoutes } from '../../../routes/dashboard-routes';

export const Dashboard = () => {
	const size = useWindowSize();
	const isDeviceMobile = size.width! < 768;

	return (
		<DashboardContainer>
			{isDeviceMobile && <TopBar />}
			{isDeviceMobile ? <BottomBar /> : <Sidebar />}

			<DashboardContent>
				<AnimatePresence mode='wait'>
					{/* para animar a montagem/desmontagem de componentes pela rota através de 
					AnimatePresence siga o mesmo padrão do componente SamplePage */}
					<Routes>
						{dashboardRoutes.map((route) => {
							return (
								<Route
									path={route.path}
									element={route.element}
									key={route.path}
								/>
							);
						})}
					</Routes>
				</AnimatePresence>
			</DashboardContent>
		</DashboardContainer>
	);
};
