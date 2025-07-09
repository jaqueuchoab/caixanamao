import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;

	max-height: 16.25rem;
	padding: 2rem;

	${({ theme }) => {
		return css`
			background-color: ${theme.colors.backgrounds.primary};
			color: ${theme.colors.texts.primary};
		`;
	}}
`;

export const FooterContent = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FooterLogo = styled.img`
	height: 64px;
	margin-bottom: 1.5rem;
`;

export const FooterActions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	font-size: var(--size-sm);

	@media (width > 830px) {
		& {
			flex-direction: row;
		}
	}
`;
