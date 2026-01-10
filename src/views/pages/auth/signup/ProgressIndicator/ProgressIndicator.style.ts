import { baseColorsDefault } from '@/views/themes/defaults';
import styled from '@emotion/styled';

interface ProgressProps {
	$active?: boolean | undefined;
}

export const Progress = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	flex-direction: row;
	gap: 8px;
	align-self: stretch;
	flex-wrap: wrap;
	margin: 0 0 16px 0;

	color: ${({ theme }) => theme.colors.texts.secondary};
`;

export const ProgressDot = styled.a<ProgressProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	border-radius: 50px;
	font-size: ${({ theme }) => theme.sizes['sm-x']}px;
	background-color: ${({ theme, $active }) =>
		$active
			? theme.colors.buttons.primary.fill
			: theme.colors.dotsAndBars.progressDot.inactive};
	color: ${() => baseColorsDefault.neutral[100]};
`;

export const LineIndicator = styled.div<ProgressProps>`
	display: flex;
	align-items: center;
	flex: 1 1 0;
	height: 4px;
	background-color: ${({ theme, $active }) =>
		$active
			? theme.colors.buttons.primary.fill
			: theme.colors.dotsAndBars.progressDot.inactive};
	border-radius: 4px;
	gap: 8px;
	width: 100%;
`;
