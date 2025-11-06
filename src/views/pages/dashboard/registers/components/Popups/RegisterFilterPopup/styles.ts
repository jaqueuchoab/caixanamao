import styled from '@emotion/styled';
import { motion } from '@lib/motion';

export const Container = styled(motion.div)`
	width: 100%;
	position: absolute;
	top: calc(100% + 8px);
	z-index: 998;

	display: flex;
	padding: 16px;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;

	border-radius: 8px;
	background: ${({ theme }) => theme.colors.backgrounds.tertiary};
	box-shadow: 0px 81px 23px 0px rgba(0, 0, 0, 0),
		0px 52px 21px 0px rgba(0, 0, 0, 0.04), 0px 29px 17px 0px rgba(0, 0, 0, 0.12),
		0px 13px 13px 0px rgba(0, 0, 0, 0.2), 0px 3px 7px 0px rgba(0, 0, 0, 0.24);

	button {
		text-align: start;
	}

	svg:hover {
		opacity: 0.6;
	}

	@media screen and (width >= 768px) {
		min-width: 390px;
		width: fit-content;
	}
`;

export const FilterRadioInputs = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: start;
	justify-content: space-evenly;
	gap: 8px;

	label {
		place-self: start;
	}
`;

export const FilterDateInputs = styled.div`
	width: 100%;
	margin: 8px 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	align-self: stretch;

	input {
		width: 100%;
	}

	@media screen and (width < 768px) {
		align-items: center;
	}
`;

export const PopupContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const PopupActions = styled.div`
	width: 100%;
	display: flex;
	gap: 16px;
`;

export const PopupEmpty = styled.span`
	margin-top: 12px;
	text-align: center;
	width: 100%;
`;
