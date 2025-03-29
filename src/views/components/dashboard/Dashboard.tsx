import { Sidebar } from '../sidebar/Sidebar';
import { DashboardContainer, DashboardContent } from './Dashboard.styles';
import { BottomBar } from '../mobileNavigation/bottomBar/BottomBar';
import { useWindowSize } from '@uidotdev/usehooks';

export const Dashboard = () => {
	const size = useWindowSize();

	return (
		<DashboardContainer>
			{size.width! > 768 ? <Sidebar /> : <BottomBar />}
			<DashboardContent>
				oi
				{/*Rotas aqui no meio :) */}
			</DashboardContent>
		</DashboardContainer>
	);
};
