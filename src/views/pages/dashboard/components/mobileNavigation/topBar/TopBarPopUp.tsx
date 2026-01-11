import {
	CircleHalfIcon,
	GearIcon,
	LifebuoyIcon,
	SignOutIcon,
} from '@phosphor-icons/react';
import { Button } from '@components/ui/button/Button';
import { TopBarPopupContainer } from './TopBar.styles';
import { useLocation, useNavigate } from '@lib/router';
import { useContextTheme } from '@context/ThemeContext';
import { toast } from 'sonner';
import { postSignOut } from '@/services/postSignOut';
import { useState } from 'react';
import { ChoicePopup } from '@/views/components/ui/popup/ChoicePopup';

export function TopBarPopUp() {
	const navigate = useNavigate();
	const { switchTheme } = useContextTheme();
	const { pathname: location } = useLocation();
	const [isSignOutPopupOpen, setIsSignOutPopupOpen] =
		useState<boolean>(false);

	const toggleSignOutPopup = () => {
		setIsSignOutPopupOpen((prev) => !prev);
	};

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

			<TopBarPopupContainer>
				<Button variant='neutral' fill_width onClick={switchTheme}>
					<CircleHalfIcon weight='fill' size={24} />
					Trocar tema
				</Button>
				<Button
					variant='neutral'
					fill_width
					onClick={() => navigate('/dashboard/help')}
				>
					<LifebuoyIcon
						weight={
							location === '/dashboard/help' ? 'fill' : 'regular'
						}
						size={24}
					/>
					Ajuda
				</Button>
				<Button
					variant='neutral'
					fill_width
					onClick={() => navigate('/dashboard/settings')}
				>
					<GearIcon
						weight={
							location === '/dashboard/settings'
								? 'fill'
								: 'regular'
						}
						size={24}
					/>
					Configurações
				</Button>
				<Button
					variant='neutral'
					fill_width
					onClick={toggleSignOutPopup}
				>
					<SignOutIcon size={24} />
					Sair
				</Button>
			</TopBarPopupContainer>
		</>
	);
}
