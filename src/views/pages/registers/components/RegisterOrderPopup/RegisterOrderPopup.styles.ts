import styled from '@emotion/styled';
import { motion } from '@lib/motion';

export const Container = styled(motion.div)`
	width: 100%;
	position: absolute;
	top: calc(100% + 8px);
	left: 0;
	z-index: 998;

	display: flex;
	padding: 16px;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;

	border-radius: 8px;
	background: ${({ theme }) => theme.colors.backgrounds.tertiary};
	box-shadow: 0px 81px 23px 0px rgba(0, 0, 0, 0),
		0px 52px 21px 0px rgba(0, 0, 0, 0.04), 0px 29px 17px 0px rgba(0, 0, 0, 0.12),
		0px 13px 13px 0px rgba(0, 0, 0, 0.2), 0px 3px 7px 0px rgba(0, 0, 0, 0.24);

	& .popup__title {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;

		& h3 {
			font-size: 16px;
			text-align: start;
			font-weight: 600;
		}
	}

	button {
		text-align: start;
	}

	svg:hover {
		opacity: 0.6;
	}

	@media screen and (width >= 768px) {
		max-width: 390px;
	}
`;

export const PopupTitle = styled.span`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;

	h3 {
		font-size: 16px;
		text-align: start;
		font-weight: 600;
	}
`;

export const Options = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	gap: 8px;

	button.selected {
		font-weight: 500;
		color: ${({ theme }) => theme.colors.texts.highlight};
	}
`;
