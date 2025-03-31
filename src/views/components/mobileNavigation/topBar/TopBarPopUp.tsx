import { CircleHalf, Gear, Lifebuoy, SignOut } from '@phosphor-icons/react';
import { Button } from '../../button/Button';
import { TopBarPopupContainer } from './TopBar.styles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

export function TopBarPopUp() {
	const navigate = useNavigate();
	const { switchTheme } = useTheme();

	return (
		<TopBarPopupContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25, ease: 'easeOut', type: 'tween' }}
		>
			<Button variant='neutral' fill_width onClick={switchTheme}>
				<CircleHalf weight='fill' size={28} />
				Trocar tema
			</Button>
			<Button variant='neutral' fill_width>
				<Lifebuoy size={28} />
				Ajuda
			</Button>
			<Button variant='neutral' fill_width>
				<Gear size={28} />
				Configurações
			</Button>
			<Button variant='neutral' fill_width onClick={() => navigate('/')}>
				<SignOut size={28} />
				Sair
			</Button>
		</TopBarPopupContainer>
	);
}
