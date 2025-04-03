import {
	CastleTurret,
	ChartBar,
	CircleHalf,
	FileText,
	Gear,
	House,
	Lifebuoy,
	List,
	Notepad,
	Plus,
	SignOut,
} from '@phosphor-icons/react';
import { Button } from '../button/Button';
import {
	SidebarActionsList,
	SidebarBottomActions,
	SidebarContainer,
	SidebarContent,
	SidebarHeader,
} from './Sidebar.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextTheme } from '../../context/ThemeContext';
import { Profile } from './profile/Profile';

export function Sidebar() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const { switchTheme } = useContextTheme();

	function handleIsOpen() {
		setIsOpen((prev) => !prev);
	}

	return (
		<SidebarContainer
			animate={{ width: isOpen ? 256 : 96 }}
			transition={{
				duration: 0.25,
				ease: 'easeOut',
				type: 'tween',
				staggerChildren: 2,
			}}
		>
			<SidebarHeader $is_open={isOpen}>
				{isOpen && (
					<Button variant='neutral' onClick={switchTheme}>
						<CircleHalf weight='fill' size={24} />
					</Button>
				)}
				<Button variant='neutral' onClick={handleIsOpen}>
					<List size={24} />
				</Button>
			</SidebarHeader>

			<SidebarContent>
				<Profile showInfos={isOpen} />

				<Button variant='primary' fill_width text_align='center'>
					<Plus size={24} />
					{isOpen && 'Novo registro'}
				</Button>

				<SidebarActionsList>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/home')}
					>
						<House size={24} />
						{isOpen && 'Página inicial'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/registers')}
					>
						<Notepad size={24} />
						{isOpen && 'Registros'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/admin')}
					>
						<CastleTurret size={24} />
						{isOpen && 'Administração'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/reports')}
					>
						<FileText size={24} />
						{isOpen && 'Relatórios'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/analysis')}
					>
						<ChartBar size={24} />
						{isOpen && 'Análises'}
					</Button>
				</SidebarActionsList>
			</SidebarContent>

			<SidebarBottomActions>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
					onClick={() => navigate('/dashboard/help')}
				>
					<Lifebuoy size={24} />
					{isOpen && 'Ajuda'}
				</Button>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
					onClick={() => navigate('/dashboard/settings')}
				>
					<Gear size={24} />
					{isOpen && 'Configurações'}
				</Button>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
					onClick={() => navigate('/')}
				>
					<SignOut size={24} />
					{isOpen && 'Sair'}
				</Button>
			</SidebarBottomActions>
		</SidebarContainer>
	);
}
