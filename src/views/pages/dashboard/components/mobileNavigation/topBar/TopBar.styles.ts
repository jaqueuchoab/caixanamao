import styled from '@emotion/styled';
import { motion } from '@lib/motion';

export const TopBarContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 16px 24px;
	justify-content: space-between;
	align-items: center;

	background: ${({ theme }) => theme.colors.backgrounds.tertiary};
	color: ${({ theme }) => theme.colors.texts.primary};
`;

export const TopBarPopupContainer = styled(motion.div)`
	z-index: 1;
	position: fixed;
	top: 80px;
	left: 0;

	display: flex;
	width: 100%;
	padding: 12px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;

	border-radius: 0px 0px 12px 12px;
	border-top: 2px solid ${({ theme }) => theme.colors.inputs.stroke};
	background: ${({ theme }) => theme.colors.backgrounds.tertiary};
	color: ${({ theme }) => theme.colors.texts.primary};
	box-shadow: 0px 81px 23px 0px rgba(0, 0, 0, 0),
		0px 29px 17px 0px rgba(0, 0, 0, 0.1), 0px 13px 13px 0px rgba(0, 0, 0, 0.2);
`;
