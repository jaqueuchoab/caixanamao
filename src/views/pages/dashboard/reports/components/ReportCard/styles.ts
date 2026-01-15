import styled from '@emotion/styled';

export const ReportContainer = styled.div`
	width: 100%;
	padding: 16px;

	display: flex;
	flex-flow: column;
	gap: 20px;

	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.register.background}72;
	border: 1px solid ${({ theme }) => theme.colors.register.itemStroke};
	color: ${({ theme }) => theme.colors.texts.primary};
	border-radius: 12px;

	@media screen and (width > 768px) {
		max-width: 300px;
	}

	#title-container {
		display: flex;
		flex-flow: wrap;
		justify-content: space-between;
		align-items: start;
		gap: 4px;

		#title {
			font-size: 16px;
			font-weight: 600;
			color: ${({ theme }) => theme.colors.texts.primary};
		}

		#date-interval {
			font-size: 14px;
			color: ${({ theme }) => theme.colors.texts.secondary};
		}
	}

	#description {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.texts.secondary};
	}

	#actions {
		display: flex;
		justify-content: space-between;
		align-items: center;

		font-size: 14px;

		a {
			color: ${({ theme }) => theme.colors.texts.highlight};
			transition: opacity 70ms ease-in-out;
			opacity: 1;

			&:hover {
				opacity: 0.64;
			}
		}
	}
`;
