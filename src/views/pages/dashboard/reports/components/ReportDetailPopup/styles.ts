import styled from '@emotion/styled';

export const ReportDetailPopupContainer = styled.div`
	z-index: 36;
	width: calc(100dvw - 48px);
	max-height: calc(85dvh - 48px);
	padding: 24px;

	display: flex;
	flex-flow: column;
	gap: 24px;
	font-size: 14px;

	background-color: ${({ theme }) => theme.colors.register.background};
	border-radius: 8px;

	#popup-title {
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;

		span#title {
			font-size: 16px;
			font-weight: 600;
			color: ${({ theme }) => theme.colors.texts.primary};
		}
	}

	#popup-content {
		width: 100%;
		overflow-y: auto;
		padding: 0 12px 0 0;
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 32px;

		#popup-values {
			width: 100%;

			display: flex;
			flex-flow: column wrap;
			gap: 8px;

			color: ${({ theme }) => theme.colors.texts.primary};
			font-size: 14px;
		}

		#popup-infos {
			display: flex;
			flex-flow: column;
			gap: 12px;

			span.infoLabel {
				display: flex;
				flex-flow: column;
				gap: 4px;
				align-items: start;
				color: ${({ theme }) => theme.colors.texts.primary};
			}
		}
	}

	@media screen and (width > 768px) {
		max-width: 50dvw;
	}
`;

export const Separator = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) =>
		theme.colors.dotsAndBars.progressDot.inactive};
`;
