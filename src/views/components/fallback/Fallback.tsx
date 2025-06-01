<<<<<<< HEAD
import style from './Fallback.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';
import { LinkBreakIcon } from '@phosphor-icons/react';

const Fallback = () => {
	const { mode } = useMode();
=======
import { LinkBreak } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import {
	ArtworkContainer,
	ErrorBadge,
	FallbackContainer,
	FallbackContent,
} from './Fallback.styles';
import artworkPath from '../../assets/FallbackArtwork.png';
import { Button } from '../button/Button';

const Fallback = () => {
>>>>>>> feature/dashboard
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const errorMessage = params.get('error') || 'Unknown error';

<<<<<<< HEAD
	/*teste*/

	return (
		<div className={style.fallback} id={style[mode]}>
			<LinkBreakIcon
				color={
					mode === 'light'
						? 'var(--color-neutral-600)'
						: 'var(--color-neutral-300)'
				}
				size={120}
			/>
			<p className={style.p}>Ops... Página não encontrada.</p>
			<span className={style.span}>
				<p>{errorMessage}</p>
			</span>
			<Link
				to={'/'}
				style={
					mode === 'light'
						? {
								color: 'var(--color-green-900)',
								fontSize: 'var(--size-2xs)',
								textDecoration: 'underline',
						  }
						: {
								color: 'var(--color-green-300)',
								fontSize: 'var(--size-2xs)',
								textDecoration: 'underline',
						  }
				}
			>
				Voltar para a página anterior
			</Link>
		</div>
=======
	return (
		<FallbackContainer>
			<FallbackContent>
				<LinkBreak size={64} />
				<h3>Ops, página não encontrada!</h3>
				<ErrorBadge>{errorMessage}</ErrorBadge>
				<Button variant='link' onClick={() => window.history.back()}>
					Voltar para pagina anterior
				</Button>
			</FallbackContent>
			<ArtworkContainer>
				<img id='fallbackArtwork' src={artworkPath} />
			</ArtworkContainer>
		</FallbackContainer>
>>>>>>> feature/dashboard
	);
};

export default Fallback;
