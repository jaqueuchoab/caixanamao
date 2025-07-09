import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	min-width: 240px;

	display: flex;
	flex-flow: column wrap;
	gap: 16px;
	align-self: stretch;

	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.register.background};
	color: ${({ theme }) => theme.colors.texts.primary};

	@media screen and (width >= 820px) {
		flex: 1 0 0;
		max-width: 620px;
	}
`;

export const HeadText = styled.div`
	padding: 12px 12px 0px 12px;

	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;
	align-items: baseline;
	gap: 8px;

	.registerCard__titleContainer {
		width: 100%;
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: space-between;

		& .registerCard__title {
			font-size: 20px;
			font-weight: 600;
		}

		& .registerCard__editIcon {
			color: ${({ theme }) => theme.colors.baseColors.blue[500]};
			transition: opacity 300ms ease;

			&:hover {
				opacity: 0.4;
			}
		}
	}

	& div.registerCard__dateInterval {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;

		font-size: 14px;

		& .registerCard__startDate,
		& .registerCard__endDate {
			color: ${({ theme }) => theme.colors.texts.secondary};
		}
	}
`;

export const Values = styled.div`
	padding: 0px 12px;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 12px;
	flex-wrap: wrap;
`;

export const Total = styled.div`
	display: flex;
	min-height: 24px;
	padding: 0 12px;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;

	border-radius: 0px 0px 12px 12px;
	background: ${({ theme }) => theme.colors.register.backgroundHighlight};
`;
