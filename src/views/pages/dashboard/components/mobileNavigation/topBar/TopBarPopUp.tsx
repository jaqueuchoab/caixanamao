import {
	CircleHalfIcon,
	GearIcon,
	LifebuoyIcon,
	SignOutIcon,
} from '@phosphor-icons/react';
import { Button } from '@components/ui/button/Button';
import { TopBarPopupContainer } from './TopBar.styles';
import { useNavigate } from '@lib/router';
import { useContextTheme } from '../../../context/ThemeContext';

export function TopBarPopUp() {
	const navigate = useNavigate();
	const { switchTheme } = useContextTheme();

	return (
		<TopBarPopupContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25, ease: 'easeOut', type: 'tween' }}
		>
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
			<Button variant='neutral' fill_width onClick={() => navigate('/')}>
				<SignOutIcon size={28} />
				Sair
			</Button>
		</TopBarPopupContainer>
	);
}
