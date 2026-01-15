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
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from '@lib/router';
import { useContextTheme } from '@context/ThemeContext';
import { Profile } from './profile/Profile';
import { toast } from 'sonner';
import { postSignOut } from '@/services/postSignOut';
import { ChoicePopup } from '@/views/components/ui/popup/ChoicePopup';
import gsap from 'gsap';

export function Sidebar() {
	const navigate = useNavigate();
	const { switchTheme } = useContextTheme();
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const { pathname: location } = useLocation();
	const [isSignOutPopupOpen, setIsSignOutPopupOpen] =
		useState<boolean>(false);

	const sidebarRef = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		if (!sidebarRef.current) return;
		const labels = sidebarRef.current.querySelectorAll('span');

		gsap.to(sidebarRef.current, {
			width: isOpen ? 256 : 96,
			duration: 0.25,
			ease: 'power2.out',
		});

		gsap.to(labels, {
			opacity: isOpen ? 1 : 0,
			duration: 0.4,
			ease: 'power1.out',
		});
	}, [isOpen]);

	return (
		<>
			<ChoicePopup
				isOpen={isSignOutPopupOpen}
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

			<SidebarContainer ref={sidebarRef}>
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
						<span>{isOpen && 'Novo registro'}</span>
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
							<span>{isOpen && 'Página inicial'}</span>
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
							<span>{isOpen && 'Registros'}</span>
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
							<span>{isOpen && 'Administração'}</span>
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
							<span>{isOpen && 'Relatórios'}</span>
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
							<span>{isOpen && 'Análises'}</span>
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
						<span>{isOpen && 'Ajuda'}</span>
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
						<span>{isOpen && 'Configurações'}</span>
					</Button>
					<Button
						style={{ padding: '12px 0' }}
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
						onClick={toggleSignOutPopup}
					>
						<SignOutIcon size={20} />
						<span>{isOpen && 'Sair'}</span>
					</Button>
				</SidebarBottomActions>
			</SidebarContainer>
		</>
	);
}
