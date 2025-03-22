import styled, { css } from 'styled-components';
import { ThemeType } from '../../themes/themeType';

export const ButtonContainer = styled.button<{
	variant: string;
	fillWidth: boolean;
	theme: ThemeType;
	textAlign?: string;
}>`
	display: flex;
	${(props) => props.fillWidth && 'width: 100%;'}
	padding: 12px 12px;
	justify-content: ${(props) => props.textAlign};
	align-items: center;
	gap: 12px;
	transition: all 0.3s linear;

	border-radius: 12px;
	${(props) => {
		// TODO: Rever padronização dos botões
		switch (props.variant) {
			case 'neutral':
				return css`
					background-color: ${props.theme.colors.buttons.neutral.fill};
					color: ${props.theme.colors.texts.primary};

					&:hover {
						background-color: ${props.theme.colors.buttons.neutral.hover};
					}
				`;
		}
	}}
`;
