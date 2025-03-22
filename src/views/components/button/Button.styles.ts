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
	padding: 12px 12px;
	justify-content: ${(props) => props.$text_align};
	align-items: center;
	gap: 12px;
	transition: all 0.3s linear;

	border-radius: 12px;
	${(props) => {
		// TODO: Rever padronização dos botões
		switch (props.$variant) {
			case 'neutral':
				return css`
					background-color: ${props.$theme.colors.buttons.neutral.fill};
					color: ${props.$theme.colors.texts.primary};

					&:hover {
						background-color: ${props.$theme.colors.buttons.neutral.hover};
					}
				`;
		}
	}}
`;
