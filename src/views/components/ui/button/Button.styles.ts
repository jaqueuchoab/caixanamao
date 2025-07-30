import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariants =
	| 'primary'
	| 'neutral'
	| 'danger'
	| 'admin'
	| 'link';

interface ButtonProps {
	$variant: ButtonVariants;
	$fill_width: boolean;
	$text_align?: 'center' | 'left';
}

export const ButtonContainer = styled.button<ButtonProps>`
	display: flex;
	${({ $fill_width }) => $fill_width && 'width: 100%;'}
	padding: 12px 16px;
	justify-content: ${({ $text_align }) => $text_align || 'center'};
	align-items: center;
	gap: 8px;

	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.64;
	}

	border-radius: 8px;
	outline-offset: 4px;

	svg {
		color: inherit;
		transition: color 0.2s ease;
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.buttons.disabledColor}64;
		color: ${({ theme }) => theme.colors.texts.primary};
	}

	${({ $variant, theme }) => {
		switch ($variant) {
			case 'primary':
				return css`
					background-color: ${theme.colors.buttons.primary.fill};
					color: ${theme.colors.buttons.primary.text};
				`;
			case 'neutral':
				return css`
					background-color: transparent;
					color: ${theme.colors.texts.primary};
				`;
			case 'danger':
				return css`
					background-color: ${theme.colors.buttons.danger.fill};
					color: ${theme.colors.buttons.danger.text};
				`;
			case 'admin':
				return css`
					background-color: ${theme.colors.buttons.admin.fill};
					color: ${theme.colors.buttons.admin.text};
				`;
			case 'link':
				return css`
					background-color: transparent;
					color: ${theme.colors.buttons.link.text};
					text-decoration: underline;

					svg {
						fill: ${theme.colors.buttons.link.text};
					}

					&:hover {
						text-decoration: none;
						svg {
							fill: ${theme.colors.buttons.link.hover};
						}
					}
				`;
		}
	}}
`;
