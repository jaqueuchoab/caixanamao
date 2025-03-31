import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TopBarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	display: flex;
	padding: 24px 32px;
	justify-content: space-between;
	align-items: center;

	background: ${(props) => props.theme.colors.backgrounds.tertiary};
	color: ${(props) => props.theme.colors.texts.primary};
`;

export const TopBarPopupContainer = styled(motion.div)`
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
	border-top: 2px solid ${(props) => props.theme.colors.inputs.stroke};
	background: ${(props) => props.theme.colors.backgrounds.tertiary};
	color: ${(props) => props.theme.colors.texts.primary};
`;
