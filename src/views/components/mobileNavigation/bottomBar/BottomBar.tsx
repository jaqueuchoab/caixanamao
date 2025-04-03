import {
	House,
	Notepad,
	FileText,
	ChartBar,
	Plus,
} from '@phosphor-icons/react';
import { Button } from '../../button/Button';
import { BottomBarContainer } from './BottomBar.styles';
import { useNavigate } from 'react-router-dom';

export function BottomBar() {
	const navigate = useNavigate();

	return (
		<BottomBarContainer>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/home')}
			>
				<House size={28} />
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/registers')}
			>
				<Notepad size={28} />
			</Button>
			<Button variant='primary' fill_width text_align='center'>
				<Plus size={28} />
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/reports')}
			>
				<FileText size={28} />
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/analysis')}
			>
				<ChartBar size={28} />
			</Button>
		</BottomBarContainer>
	);
}
