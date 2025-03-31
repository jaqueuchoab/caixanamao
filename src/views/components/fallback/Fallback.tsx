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
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const errorMessage = params.get('error') || 'Unknown error';

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
	);
};

export default Fallback;
