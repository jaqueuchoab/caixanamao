import styled from '@emotion/styled';

export const FullPageOverlay = styled.div`
	z-index: 24;
	width: 100%;
	height: 100%;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #00000040;
	backdrop-filter: blur(2px);
`;

export const PopupContainer = styled.div`
	width: 100%;
	max-width: 80%;
	padding: 16px;

	display: flex;
	flex-flow: column;
	justify-content: space-between;
	gap: 2px;

	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.register.background};

	@media screen and (width >= 768px) {
		max-width: 420px;
	}
`;

export const PopupHeader = styled.div`
	display: flex;
	flex-flow: column;
	gap: 8px;
	margin-bottom: 24px;
`;

export const PopupTitle = styled.span`
	width: 100%;
	display: flex;
	justify-content: space-between;

	font-weight: 500;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.texts.primary};

	& .closeIcon {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.texts.secondary};
		&:hover {
			opacity: 0.64;
		}
	}
`;

export const PopupDescription = styled.span`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.texts.secondary};
`;

export const PopupActions = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
`;
