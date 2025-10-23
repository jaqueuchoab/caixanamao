import styled from '@emotion/styled';
import { motion } from '@lib/motion';

export const Container = styled(motion.div)`
	width: 100%;
	height: 100%;

	display: flex;
	flex-flow: column;
	justify-content: start;
	align-items: start;
	gap: 32px;
`;

export const Title = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;

	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 32px;

	@media screen and (width >= 768px) {
		width: fit-content;
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	align-self: stretch;

	@media screen and (width > 768px) {
		gap: 32px;
	}
`;

export const FormActions = styled.div<{ isFirstStep: boolean }>`
	width: 100%;
	max-width: 360px;

	display: flex;
	flex-flow: column-reverse;
	justify-content: ${({ isFirstStep }) =>
		isFirstStep ? 'flex-end' : 'space-between'};
	align-items: center;
	gap: 16px;

	button {
		width: 100%;
	}

	@media screen and (width >= 768px) {
		flex-flow: row;
		max-width: 100%;
	}
`;

export const InputContainer = styled.span`
	display: flex;
	flex-flow: column;
	align-items: start;
	gap: 12px;

	& label {
		font-size: 16px;
		font-weight: bold;
	}
`;
