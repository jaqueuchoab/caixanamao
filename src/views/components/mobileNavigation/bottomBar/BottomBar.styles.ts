import styled from '@emotion/styled';

export const BottomBarContainer = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;

	display: flex;
	width: 100%;
	padding: 16px 16px;
	justify-content: space-around;
	align-items: center;
	gap: 12px;

	border-radius: 12px 12px 0px 0px;
	background: ${({ theme }) => theme.colors.backgrounds.navbar};
	color: ${({ theme }) => theme.colors.texts.primary};
	svg {
		color: inherit;
	}
`;
