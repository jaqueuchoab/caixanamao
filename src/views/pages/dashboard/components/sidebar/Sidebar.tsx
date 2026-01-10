import {
	CastleTurretIcon,
	ChartBarIcon,
	CircleHalfIcon,
	FileTextIcon,
	GearIcon,
	HouseIcon,
	LifebuoyIcon,
	ListIcon,
	NotepadIcon,
	PlusIcon,
	SignOutIcon,
} from '@phosphor-icons/react';
import { Button } from '@components/ui/button/Button';
import {
	SidebarActionsList,
	SidebarBottomActions,
	SidebarContainer,
	SidebarContent,
	SidebarHeader,
} from './Sidebar.styles';
import { useState } from 'react';
import { useLocation, useNavigate } from '@lib/router';
import { useContextTheme } from '@context/ThemeContext';
import { Profile } from './profile/Profile';
import { toast } from 'sonner';
import { postSignOut } from '@/services/postSignOut';

export function Sidebar() {
	const navigate = useNavigate();
	const { switchTheme } = useContextTheme();
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const { pathname: location } = useLocation();

	function handleIsOpen() {
		setIsOpen((prev) => !prev);
	}

	async function handleSignOut() {
		await postSignOut();
		navigate('/auth/login');
		toast.success('Até mais!', {
			description: 'Você foi deslogado com segurança',
		});
	}

	return (
		<SidebarContainer style={{ width: isOpen ? 256 : 96 }}>
			<SidebarHeader $is_open={isOpen}>
				{isOpen && (
					<CircleHalfIcon
						weight='fill'
						size={24}
						onClick={switchTheme}
					/>
				)}
				<ListIcon size={24} onClick={handleIsOpen} />
			</SidebarHeader>

			<SidebarContent>
				<Profile showInfos={isOpen} />

				<Button
					onClick={() => navigate('/dashboard/registers/new')}
					variant='primary'
					fill_width
					text_align='center'
				>
					<PlusIcon size={24} />
					{isOpen && 'Novo registro'}
				</Button>

				<SidebarActionsList>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/home')}
						className={
							location === '/dashboard/home' ? 'active' : ''
						}
					>
						<HouseIcon size={24} />
						{isOpen && 'Página inicial'}
					</Button>

					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/registers')}
						className={
							location === '/dashboard/registers' ? 'active' : ''
						}
					>
						<NotepadIcon size={24} />
						{isOpen && 'Registros'}
					</Button>

					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/admin')}
						className={
							location === '/dashboard/admin' ? 'active' : ''
						}
					>
						<CastleTurretIcon size={24} />
						{isOpen && 'Administração'}
					</Button>

					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/reports')}
						className={
							location === '/dashboard/reports' ? 'active' : ''
						}
					>
						<FileTextIcon size={24} />
						{isOpen && 'Relatórios'}
					</Button>

					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/analysis')}
						className={
							location === '/dashboard/analysis' ? 'active' : ''
						}
					>
						<ChartBarIcon size={24} />
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
					className={location === '/dashboard/help' ? 'active' : ''}
				>
					<LifebuoyIcon size={24} />
					{isOpen && 'Ajuda'}
				</Button>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
					onClick={() => navigate('/dashboard/settings')}
					className={
						location === '/dashboard/settings' ? 'active' : ''
					}
				>
					<GearIcon size={24} />
					{isOpen && 'Configurações'}
				</Button>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
					onClick={handleSignOut}
				>
					<SignOutIcon size={24} />
					{isOpen && 'Sair'}
				</Button>
			</SidebarBottomActions>
		</SidebarContainer>
	);
}
