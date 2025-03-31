import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariants = 'primary' | 'neutral' | 'danger' | 'admin' | 'link';

interface ButtonProps {
	$variant: ButtonVariants;
	$fill_width: boolean;
	$text_align?: 'center' | 'left';
}

export const ButtonContainer = styled.button<ButtonProps>`
	display: flex;
	${({ $fill_width }) => $fill_width && 'width: 100%;'}
	padding: 10px 13px;
	justify-content: ${({ $text_align }) => $text_align || 'center'};
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
		background-color: ${({ theme }) => theme.colors.buttons.disabledColor};
		color: ${({ theme }) => theme.colors.texts.primary};
	}

	${({ $variant, theme }) => {
		switch ($variant) {
			case 'primary':
				return css`
					background-color: ${theme.colors.buttons.primary.fill};
					color: ${theme.colors.buttons.primary.text};

					&:hover {
						background-color: ${theme.colors.buttons.primary.hover};
					}
				`;
			case 'neutral':
				return css`
					background-color: transparent;
					color: ${theme.colors.texts.primary};

					&:hover {
						background-color: ${theme.colors.buttons.neutral.hover};
					}
				`;
			case 'danger':
				return css`
					background-color: ${theme.colors.buttons.danger.fill};
					color: ${theme.colors.buttons.danger.text};

					&:hover {
						background-color: ${theme.colors.buttons.danger.hover};
					}
				`;
			case 'admin':
				return css`
					background-color: ${theme.colors.buttons.admin.fill};
					color: ${theme.colors.buttons.admin.text};

					&:hover {
						background-color: ${theme.colors.buttons.admin.hover};
					}
				`;
			case 'link':
				return css`
					background-color: ${theme.colors.buttons.link.fill};
					color: ${theme.colors.buttons.link.text};
					text-decoration: underline;

					svg {
						fill: ${theme.colors.buttons.link.text};
					}

					&:hover {
						color: ${theme.colors.buttons.link.hover};

						svg {
							fill: ${theme.colors.buttons.link.hover};
						}
					}
				`;
		}
	}}
`;
