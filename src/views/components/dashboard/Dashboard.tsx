import { Button } from '../button/Button';
import { Sidebar } from '../sidebar/Sidebar';
import { DashboardContainer, DashboardContent } from './Dashboard.styles';
import {
	CastleTurret,
	Hash,
	Link,
	WarningOctagon,
} from '@phosphor-icons/react';
import { useTheme } from '../../context/ThemeContext';

export const Dashboard = () => {
	const { theme } = useTheme();
	return (
		<DashboardContainer>
			<Sidebar />
			<DashboardContent theme={theme}>
				<Button variant='primary'>
					<Hash size={24} />
					Primary
				</Button>
				<Button variant='danger'>
					<WarningOctagon size={24} />
					Danger
				</Button>
				<Button variant='admin'>
					<CastleTurret size={24} />
					Admin
				</Button>
				<Button variant='link'>
					<Link size={24} />
					Link
				</Button>
			</DashboardContent>
			{/*Rotas aqui no meio :) */}
		</DashboardContainer>
	);
};
