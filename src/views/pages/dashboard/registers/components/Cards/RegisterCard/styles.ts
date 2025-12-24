import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	max-width: 430px;

	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;
	gap: 16px;

	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.register.background}72;
	border: 1px solid ${({ theme }) => theme.colors.register.itemStroke};
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
			font-size: 18px;
			font-weight: 600;
		}

		& .registerCard__editIcon {
			color: ${({ theme }) => theme.colors.baseColors.blue[500]};
		}

		& .registerCard__removeIcon {
			color: ${({ theme }) => theme.colors.buttons.danger.stroke};
		}
	}

	& div.registerCard__dateInterval {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;

		font-size: 14px;
		color: ${({ theme }) => theme.colors.texts.secondary};
	}

	& div.registerCard__actions {
		display: flex;
		gap: 2px;
	}
`;

export const Values = styled.div`
	padding: 0px 12px;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
	gap: 12px;

	& > :not(:last-child) {
		border-bottom: 1px solid
			${({ theme }) => theme.colors.register.itemStroke};
	}
`;

export const Total = styled.div`
	display: flex;
	min-height: 24px;
	padding: 0 12px;
	justify-content: space-between;
	align-items: center;

	border-radius: 0px 0px 12px 12px;

	&[data-category='profit'] {
		background: linear-gradient(
			180deg,
			${({ theme }) => theme.colors.buttons.primary.fill}64 -90%,
			${({ theme }) => theme.colors.register.background}75 100%
		);
	}

	&[data-category='loss'] {
		background: linear-gradient(
			180deg,
			${({ theme }) => theme.colors.buttons.danger.fill}64 -90%,
			${({ theme }) => theme.colors.register.background}75 100%
		);
	}
`;
