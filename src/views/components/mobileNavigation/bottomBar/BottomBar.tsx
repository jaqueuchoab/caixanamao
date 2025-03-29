import {
	House,
	Notepad,
	FileText,
	ChartBar,
	Plus,
} from '@phosphor-icons/react';
import { Button } from '../../button/Button';
import { BottomBarContainer } from './BottomBar.styles';
import { useTheme } from 'styled-components';

export function BottomBar() {
	const theme = useTheme();

	return (
		<BottomBarContainer>
			<Button variant='neutral' fill_width text_align='center'>
				<House size={32} color={theme.colors.iconsColor} />
			</Button>
			<Button variant='neutral' fill_width text_align='center'>
				<Notepad size={32} color={theme.colors.iconsColor} />
			</Button>
			<Button variant='primary' fill_width text_align='center'>
				<Plus size={32} color={theme.colors.buttons.primary.text} />
			</Button>
			<Button variant='neutral' fill_width text_align='center'>
				<FileText size={32} color={theme.colors.iconsColor} />
			</Button>
			<Button variant='neutral' fill_width text_align='center'>
				<ChartBar size={32} color={theme.colors.iconsColor} />
			</Button>
		</BottomBarContainer>
	);
}
