import styled from '@emotion/styled';

export const SpinnerOverlay = styled.div`
	width: 100dvw;
	height: 100dvh;

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;

	background-color: ${({ theme }) => theme.colors.backgrounds.tertiary};
	opacity: 0.9;
`;

export const StyledSpinner = styled.span`
	width: 48px;
	height: 48px;
	border: 5px solid ${({ theme }) => theme.colors.backgrounds.popup};
	border-bottom-color: ${({ theme }) => theme.colors.texts.highlight};
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
