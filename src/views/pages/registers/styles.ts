import styled from '@emotion/styled';
import { motion } from '@lib/motion';

export const Container = styled(motion.div)`
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
	display: flex;
	flex-flow: column;
	gap: 8px;

	h1 {
		color: ${({ theme }) => theme.colors.texts.primary};
		font-family: Sora;
		font-size: 24px;
		font-weight: 600;
	}

	span.lastUpdate {
		font-size: 16px;
		color: ${({ theme }) => theme.colors.texts.secondary};
	}

	@media screen and (width > 768px) {
		h1 {
			font-size: 32px;
		}
	}
`;

export const RelativePopupsContainer = styled.div`
	width: inherit;
	position: relative;
	display: flex;
	gap: 8px;
	transition: color 0.7s ease;
`;

export const TopActions = styled.div`
	width: 100%;
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

export const RegistersList = styled.div`
	display: flex;
	align-items: flex-start;
	align-content: flex-start;
	gap: 32px;
	align-self: stretch;
	flex-wrap: wrap;
`;
