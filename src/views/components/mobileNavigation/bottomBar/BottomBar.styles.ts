import styled from 'styled-components';

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
	background: ${(props) => props.theme.colors.backgrounds.navbar};
	color: ${(props) => props.theme.colors.texts.primary};
	svg {
		color: inherit;
	}
	// box-shadow: 0px -21px 10px -12px rgba(0, 0, 0, 0.16);

	button {
		padding: 12px 12px;
	}
`;
