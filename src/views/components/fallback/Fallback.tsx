import { LinkBreak } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import {
	ArtworkContainer,
	CustomLink,
	ErrorBadge,
	FallbackContainer,
	FallbackContent,
} from './Fallback.styles';
import artworkPath from '../../assets/FallbackArtwork.png';

const Fallback = () => {
	const { theme } = useTheme();

	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const errorMessage = params.get('error') || 'Unknown error';

	return (
		<FallbackContainer theme={theme}>
			<FallbackContent>
				<LinkBreak color={theme.colors.texts.secondary} size={64} />
				<h3>Ops, página não encontrada!</h3>
				<ErrorBadge theme={theme}>{errorMessage}</ErrorBadge>
				<CustomLink theme={theme} to={''} onClick={() => window.history.back()}>
					Voltar para pagina anterior
				</CustomLink>
			</FallbackContent>
			<ArtworkContainer>
				<img id='fallbackArtwork' src={artworkPath} />
			</ArtworkContainer>
		</FallbackContainer>
	);
};

export default Fallback;
