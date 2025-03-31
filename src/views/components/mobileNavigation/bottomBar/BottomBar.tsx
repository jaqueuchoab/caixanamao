import {
	House,
	Notepad,
	FileText,
	ChartBar,
	Plus,
} from '@phosphor-icons/react';
import { Button } from '../../button/Button';
import { BottomBarContainer } from './BottomBar.styles';

export function BottomBar() {
	return (
		<BottomBarContainer>
			<Button variant='neutral' fill_width text_align='center'>
				<House size={28} />
			</Button>
			<Button variant='neutral' fill_width text_align='center'>
				<Notepad size={28} />
			</Button>
			<Button variant='primary' fill_width text_align='center'>
				<Plus size={28} />
			</Button>
			<Button variant='neutral' fill_width text_align='center'>
				<FileText size={28} />
			</Button>
			<Button variant='neutral' fill_width text_align='center'>
				<ChartBar size={28} />
			</Button>
		</BottomBarContainer>
	);
}
