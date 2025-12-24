import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;

	display: flex;
	flex-flow: column;
	justify-content: start;
	align-items: start;
	gap: 32px;

	button.success {
		font-weight: 500;
		color: ${({ theme }) => theme.colors.texts.highlight};
	}
`;

export const Title = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	gap: 8px;

	span.lastUpdate {
		font-size: 16px;
		color: ${({ theme }) => theme.colors.texts.secondary};
	}
`;

export const RelativePopupsContainer = styled.div`
	width: inherit;
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	flex-flow: wrap;
	gap: 8px;
	transition: color 0.7s ease;

	& > button {
		width: 100%;
	}

	@media screen and (width > 768px) {
		display: flex;
		& > button {
			width: fit-content;
		}
	}

	span.removeCurrentModifier:hover {
		color: ${({ theme }) => theme.colors.buttons.danger.fill};
	}
`;

export const TopActions = styled.div`
	width: 100%;
	position: relative;

	display: flex;
	flex-flow: column wrap;
	align-items: flex-start;
	align-content: space-between;
	gap: 12px;

	& > button {
		width: 100%;
	}

	@media screen and (width > 768px) {
		flex-flow: row nowrap;

		& > button {
			width: fit-content;
		}
	}
`;

export const RegistersContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-flow: column;
	gap: 16px;

	#registers-quantity {
		color: ${({ theme }) => theme.colors.texts.secondary};
	}
`;

export const RegistersList = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: flex-start;
	align-content: flex-start;
	gap: 32px;

	flex-wrap: wrap;
`;

export const EmptyRegisterListContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	gap: 16px;

	text-align: center;
	color: ${({ theme }) => theme.colors.inputs.placeholder};
`;
