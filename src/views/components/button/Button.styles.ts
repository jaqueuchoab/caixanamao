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
	padding: 10px 13px;
	justify-content: ${(props) => props.$text_align};
	align-items: center;
	gap: 8px;
	transition: background-color 0.2s ease;

	border-radius: 8px;
	outline-offset: 4px;

	svg {
		color: inherit;
		transition: color 0.2s ease;
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
				`;
			case 'neutral':
				return css`
					background-color: 'transparent'
					color: ${props.$theme.colors.texts.primary};

					&:hover {
						background-color: ${props.$theme.colors.buttons.neutral.hover};
					}
				`;
			case 'danger':
				return css`
					background-color: ${props.$theme.colors.buttons.danger.fill};
					color: ${props.$theme.colors.buttons.danger.text};

					&:hover {
						background-color: ${props.$theme.colors.buttons.danger.hover};
					}
				`;
			case 'admin':
				return css`
					background-color: ${props.$theme.colors.buttons.admin.fill};
					color: ${props.$theme.colors.buttons.admin.text};

					&:hover {
						background-color: ${props.$theme.colors.buttons.admin.hover};
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
