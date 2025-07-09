import styled from '@emotion/styled';
import { motion } from '@lib/motion';

export const Container = styled(motion.div)`
	width: 100%;

	display: flex;
	flex-flow: column;
	justify-content: start;
	align-items: start;
	gap: 32px;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.texts.primary};
	font-family: Sora;
	font-size: 24px;
	font-weight: 600;

	@media screen and (width > 768px) {
		font-size: 32px;
	}
`;

export const DropdownAction = styled.div`
	position: relative;
	display: inline-block;
	transition: color 0.7s ease;

	button.selected {
		font-weight: 500;
		color: ${({ theme }) => theme.colors.texts.highlight};
	}
`;

export const TopActions = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: flex-start;
	align-content: space-between;
	gap: 12px;
	align-self: stretch;

	@media screen and (width > 768px) {
		flex-flow: row wrap;
	}
`;

export const RegistersList = styled.div`
	display: flex;
	align-items: flex-start;
	align-content: flex-start;
	gap: 32px;
	align-self: stretch;
	flex-wrap: wrap;
`;
