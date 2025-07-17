import {
	HouseIcon,
	NotepadIcon,
	FileTextIcon,
	ChartBarIcon,
	PlusIcon,
} from '@phosphor-icons/react';
import { Button } from '@components/ui/button/Button';
import { BottomBarContainer } from './BottomBar.styles';
import { useNavigate } from '@lib/router';

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
				<HouseIcon size={28} />
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/registers')}
			>
				<NotepadIcon size={28} />
			</Button>
			<Button variant='primary' fill_width text_align='center'>
				<PlusIcon size={28} />
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/reports')}
			>
				<FileTextIcon size={28} />
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/analysis')}
			>
				<ChartBarIcon size={28} />
			</Button>
		</BottomBarContainer>
	);
}
