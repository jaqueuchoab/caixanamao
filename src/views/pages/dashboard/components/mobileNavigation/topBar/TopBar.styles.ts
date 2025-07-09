import styled from '@emotion/styled';
import { motion } from '@lib/motion';

export const TopBarContainer = styled.div`
	top: 0;
	left: 0;

	width: 100%;
	display: flex;
	padding: 24px 32px;
	justify-content: space-between;
	align-items: center;

	background: ${({ theme }) => theme.colors.backgrounds.tertiary};
	color: ${({ theme }) => theme.colors.texts.primary};
`;

export const TopBarPopupContainer = styled(motion.div)`
	z-index: 1;
	position: fixed;
	top: 96px;
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
`;
