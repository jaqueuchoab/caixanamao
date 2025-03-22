import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ThemeType } from '../../themes/themeType';

export const SidebarContainer = styled(motion.nav)<{
	$theme: ThemeType;
}>`
	height: 100dvh;
	padding: 24px 16px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	color: ${(props) => props.$theme.colors.texts.primary};
	background-color: ${(props) => props.$theme.colors.backgrounds.tertiary};

	svg {
		min-width: 24px;
	}
`;

export const SidebarHeader = styled.div<{ $is_open: boolean }>`
	width: 100%;
	display: flex;
	justify-content: ${(props) => (props.$is_open ? 'space-between;' : 'center;')}
	align-items: center;
`;

export const SidebarContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 36px;
	align-self: stretch;
`;

export const SidebarProfile = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	align-self: stretch;
`;

export const SidebarActionsList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 12px;
	align-self: stretch;
`;

export const SidebarBottomActions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	gap: 12px;
	align-self: stretch;
`;
