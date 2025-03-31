import { Sidebar } from '../sidebar/Sidebar';
import { DashboardContainer, DashboardContent } from './Dashboard.styles';
import { BottomBar } from '../mobileNavigation/bottomBar/BottomBar';
import { useWindowSize } from '@uidotdev/usehooks';
import { TopBar } from '../mobileNavigation/topBar/TopBar';
import { FileDashed } from '@phosphor-icons/react';
import { Button } from '../button/Button';

export const Dashboard = () => {
	const size = useWindowSize();
	const isDeviceMobile = size.width! < 768;

	return (
		<DashboardContainer>
			{isDeviceMobile && <TopBar />}
			{isDeviceMobile ? <BottomBar /> : <Sidebar />}

			<DashboardContent>
				<FileDashed size={81} />
				<p style={{ maxWidth: 256, textAlign: 'center' }}>
					Parece que você ainda não fez nenhum registo de caixa, que tal fazer o
					primeiro?
				</p>
				<Button>Primeiro registro</Button>

				{/*Rotas aqui no meio :) */}
			</DashboardContent>
		</DashboardContainer>
	);
};
