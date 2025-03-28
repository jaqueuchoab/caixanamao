import styled, { css } from 'styled-components';
import { ThemeType } from '../../themes/themeType';

export const ButtonContainer = styled.button<{
	$variant: string;
	$fill_width: boolean;
	$theme: ThemeType;
	$text_align?: string;
	/* props passadas para dentro de um styled-component são antecedidas de $ 
	para o dom ignora-las, removendo um warning */
}>`
	display: flex;
	${(props) => props.$fill_width && 'width: 100%;'}
	padding: 10px 12px;
	justify-content: ${(props) => props.$text_align};
	align-items: center;
	gap: 8px;
	transition: all 0.3s ease;

	border-radius: 8px;

	svg {
		transition: all 0.3s ease;
	}

	&:disabled {
		background-color: ${(props) => props.$theme.colors.buttons.disabledColor};
		color: ${(props) => props.$theme.colors.texts.primary};
	}

	${(props) => {
		switch (props.$variant) {
			case 'primary':
				return css`
					background-color: ${props.$theme.colors.buttons.primary.fill};
					color: ${props.$theme.colors.buttons.primary.text};

					&:hover {
						background-color: ${props.$theme.colors.buttons.primary.hover};
					}

					&:active {
						outline: ${props.$theme.colors.buttons.primary.stroke};
					}
				`;
			case 'neutral':
				return css`
					background-color: 'transparent'
					color: ${props.$theme.colors.texts.primary};

					&:hover {
						background-color: ${props.$theme.colors.buttons.neutral.hover};
					}

					&:active {
						outline: ${props.$theme.colors.buttons.neutral.stroke};
					}
				`;
			case 'danger':
				return css`
					background-color: ${props.$theme.colors.buttons.danger.fill};
					color: ${props.$theme.colors.buttons.danger.text};

					&:hover {
						background-color: ${props.$theme.colors.buttons.danger.hover};
					}

					&:active {
						outline: ${props.$theme.colors.buttons.danger.stroke};
					}
				`;
			case 'admin':
				return css`
					background-color: ${props.$theme.colors.buttons.admin.fill};
					color: ${props.$theme.colors.buttons.admin.text};

					&:hover {
						background-color: ${props.$theme.colors.buttons.admin.hover};
					}

					&:active {
						outline: ${props.$theme.colors.buttons.admin.stroke};
					}
				`;

			case 'link':
				return css`
					background-color: ${props.$theme.colors.buttons.link.fill};
					color: ${props.$theme.colors.buttons.link.text};
					text-decoration: underline;
					svg {
						fill: ${props.$theme.colors.buttons.link.text};
					}

					&:hover {
						color: ${props.$theme.colors.buttons.link.hover};
						svg {
							fill: ${props.$theme.colors.buttons.link.hover};
						}
					}
				`;
		}
	}}
`;
