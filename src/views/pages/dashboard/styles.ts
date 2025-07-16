import styled from '@emotion/styled';

export const DashboardContainer = styled.div`
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
	width: 100%;
	height: 100dvh;
	max-height: 100dvh;
	max-width: 100%;
	overflow-y: auto;
	overflow-x: hidden;

	display: flex;
	padding: 32px 24px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 32px;
	padding-bottom: 120px;

	background-color: ${({ theme }) => theme.colors.backgrounds.dashboard};
	color: ${({ theme }) => theme.colors.texts.secondary};

	@media screen and (width >= 768px) {
		padding: 48px 64px;
		flex-direction: column;
	}
`;
