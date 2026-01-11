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
import { ChoicePopup } from '@/views/components/ui/popup/ChoicePopup';

export function Sidebar() {
	const navigate = useNavigate();
	const { switchTheme } = useContextTheme();
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const { pathname: location } = useLocation();
	const [isSignOutPopupOpen, setIsSignOutPopupOpen] =
		useState<boolean>(false);

	const toggleSignOutPopup = () => {
		setIsSignOutPopupOpen((prev) => !prev);
	};

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
		<>
			{isSignOutPopupOpen && (
				<ChoicePopup
					title='Tem certeza que deseja sair?'
					onClose={toggleSignOutPopup}
					confirm={{
						text: 'Sair',
						onConfirm: handleSignOut,
					}}
					refuse={{
						text: 'Voltar',
						onRefuse: toggleSignOutPopup,
					}}
				/>
			)}

			<SidebarContainer style={{ width: isOpen ? 256 : 96 }}>
				<SidebarHeader $is_open={isOpen}>
					{isOpen && (
						<CircleHalfIcon
							weight='fill'
							size={20}
							onClick={switchTheme}
						/>
					)}
					<ListIcon size={20} onClick={handleIsOpen} />
				</SidebarHeader>

				<SidebarContent>
					<Profile showInfos={isOpen} />

					<Button
						onClick={() => navigate('/dashboard/registers/new')}
						variant='primary'
						fill_width
						text_align='center'
					>
						<PlusIcon size={16} />
						{isOpen && 'Novo registro'}
					</Button>

					<SidebarActionsList>
						<Button
							style={{ padding: '12px 0' }}
							variant='neutral'
							fill_width
							text_align={isOpen ? 'left' : 'center'}
							onClick={() => navigate('/dashboard/home')}
							className={
								location === '/dashboard/home' ? 'active' : ''
							}
						>
							<HouseIcon
								weight={
									location === '/dashboard/home'
										? 'fill'
										: 'regular'
								}
								size={20}
							/>
							{isOpen && 'Página inicial'}
						</Button>

						<Button
							style={{ padding: '12px 0' }}
							variant='neutral'
							fill_width
							text_align={isOpen ? 'left' : 'center'}
							onClick={() => navigate('/dashboard/registers')}
							className={
								location === '/dashboard/registers'
									? 'active'
									: ''
							}
						>
							<NotepadIcon
								weight={
									location === '/dashboard/registers'
										? 'fill'
										: 'regular'
								}
								size={20}
							/>
							{isOpen && 'Registros'}
						</Button>

						<Button
							style={{ padding: '12px 0' }}
							variant='neutral'
							fill_width
							text_align={isOpen ? 'left' : 'center'}
							onClick={() => navigate('/dashboard/admin')}
							className={
								location === '/dashboard/admin' ? 'active' : ''
							}
						>
							<CastleTurretIcon
								weight={
									location === '/dashboard/admin'
										? 'fill'
										: 'regular'
								}
								size={20}
							/>
							{isOpen && 'Administração'}
						</Button>

						<Button
							style={{ padding: '12px 0' }}
							variant='neutral'
							fill_width
							text_align={isOpen ? 'left' : 'center'}
							onClick={() => navigate('/dashboard/reports')}
							className={
								location === '/dashboard/reports'
									? 'active'
									: ''
							}
						>
							<FileTextIcon
								weight={
									location === '/dashboard/reports'
										? 'fill'
										: 'regular'
								}
								size={20}
							/>
							{isOpen && 'Relatórios'}
						</Button>

						<Button
							style={{ padding: '12px 0' }}
							variant='neutral'
							fill_width
							text_align={isOpen ? 'left' : 'center'}
							onClick={() => navigate('/dashboard/analysis')}
							className={
								location === '/dashboard/analysis'
									? 'active'
									: ''
							}
						>
							<ChartBarIcon
								weight={
									location === '/dashboard/analysis'
										? 'fill'
										: 'regular'
								}
								size={20}
							/>
							{isOpen && 'Análises'}
						</Button>
					</SidebarActionsList>
				</SidebarContent>

				<SidebarBottomActions>
					<Button
						style={{ padding: '12px 0' }}
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/help')}
						className={
							location === '/dashboard/help' ? 'active' : ''
						}
					>
						<LifebuoyIcon
							weight={
								location === '/dashboard/help'
									? 'fill'
									: 'regular'
							}
							size={20}
						/>
						{isOpen && 'Ajuda'}
					</Button>
					<Button
						style={{ padding: '12px 0' }}
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={() => navigate('/dashboard/settings')}
						className={
							location === '/dashboard/settings' ? 'active' : ''
						}
					>
						<GearIcon
							weight={
								location === '/dashboard/settings'
									? 'fill'
									: 'regular'
							}
							size={20}
						/>
						{isOpen && 'Configurações'}
					</Button>
					<Button
						style={{ padding: '12px 0' }}
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={toggleSignOutPopup}
					>
						<SignOutIcon size={20} />
						{isOpen && 'Sair'}
					</Button>
				</SidebarBottomActions>
			</SidebarContainer>
		</>
	);
}
