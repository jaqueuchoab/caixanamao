import {
	CircleHalfIcon,
	GearIcon,
	LifebuoyIcon,
	SignOutIcon,
} from '@phosphor-icons/react';
import { Button } from '@components/ui/button/Button';
import { TopBarPopupContainer } from './TopBar.styles';
import { useNavigate } from '@lib/router';
import { useContextTheme } from '@context/ThemeContext';
import { toast } from 'sonner';
import { postSignOut } from '@/services/postSignOut';

export function TopBarPopUp() {
	const navigate = useNavigate();
	const { switchTheme } = useContextTheme();

	async function handleSignOut() {
		await postSignOut();
		navigate('/auth/login');
		toast.success('Até mais!', {
			description: 'Você foi deslogado com segurança',
		});
	}

	return (
		<TopBarPopupContainer>
			<Button variant='neutral' fill_width onClick={switchTheme}>
				<CircleHalfIcon weight='fill' size={28} />
				Trocar tema
			</Button>
			<Button
				variant='neutral'
				fill_width
				onClick={() => navigate('/dashboard/help')}
			>
				<LifebuoyIcon size={28} />
				Ajuda
			</Button>
			<Button
				variant='neutral'
				fill_width
				onClick={() => navigate('/dashboard/settings')}
			>
				<GearIcon size={28} />
				Configurações
			</Button>
			<Button variant='neutral' fill_width onClick={handleSignOut}>
				<SignOutIcon size={28} />
				Sair
			</Button>
		</TopBarPopupContainer>
	);
}
