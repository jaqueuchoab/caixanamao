import styled from '@emotion/styled';

export const FallbackContainer = styled.div`
	height: 100dvh; /* este ajuste eh temporario, o container de 100dvh deveria ser o root
    para todos os containers se adaptarem a ele */
	width: 100%;
	padding: 64px 32px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.backgrounds.tertiary};
	color: ${({ theme }) => theme.colors.texts.primary};

	@media screen and (width >= 830px) {
		& {
			flex-flow: row;
			gap: 96px;
		}
	}
`;

export const FallbackContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--md, 24px);
	align-self: stretch;

	@media screen and (width >= 830px) {
		align-items: flex-start;
	}

	h3 {
		font-size: 24px;
		font-weight: 400;

		@media screen and (width <= 830px) {
			text-align: center;
		}
	}
`;

export const ErrorBadge = styled.div`
	display: flex;
	padding: 8px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;

	font-weight: 600;
	border-radius: 8px;
	background: ${({ theme }) => theme.colors.baseColors.neutral[600]};
	color: ${({ theme }) => theme.colors.baseColors.neutral[200]};
`;

export const ArtworkContainer = styled.div`
	overflow: hidden;
	border-radius: 32px;

	img#fallbackArtwork {
		transform: scale(1.01); /* remove bordas brancas da imagem */

		max-height: 80dvh;
		width: 100%;
		height: 100%;
	}

	@media screen and (width < 830px) {
		& {
			display: none;
		}
	}
`;
