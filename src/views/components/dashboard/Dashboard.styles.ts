import styled from '@emotion/styled';

export const DashboardContainer = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: self-start;

	@media screen and (width > 768px) {
		& {
			flex-direction: row;
		}
	}
`;

export const DashboardContent = styled.main`
	height: 100vh;
	width: 100%;
	padding: 24px;
	overflow: auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;

	background-color: ${({ theme }) => theme.colors.backgrounds.dashboard};
	color: ${({ theme }) => theme.colors.texts.secondary};
`;
