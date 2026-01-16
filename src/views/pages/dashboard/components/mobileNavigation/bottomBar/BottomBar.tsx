import {
	HouseIcon,
	NotepadIcon,
	FileTextIcon,
	ChartBarIcon,
	PlusIcon,
} from '@phosphor-icons/react';
import { Button } from '@components/ui/button/Button';
import { BottomBarContainer } from './BottomBar.styles';
import { useLocation, useNavigate } from '@lib/router';

export function BottomBar() {
	const navigate = useNavigate();
	const { pathname: location } = useLocation();

	return (
		<BottomBarContainer>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/home')}
			>
				<HouseIcon
					weight={location === '/dashboard/home' ? 'fill' : 'regular'}
					size={24}
				/>
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/registers')}
			>
				<NotepadIcon
					weight={
						location === '/dashboard/registers' ? 'fill' : 'regular'
					}
					size={24}
				/>
			</Button>
			<Button
				variant='primary'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/registers/new')}
			>
				<PlusIcon size={24} />
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/reports')}
			>
				<FileTextIcon
					weight={
						location === '/dashboard/reports' ? 'fill' : 'regular'
					}
					size={24}
				/>
			</Button>
			<Button
				variant='neutral'
				fill_width
				text_align='center'
				onClick={() => navigate('/dashboard/analysis')}
			>
				<ChartBarIcon
					weight={
						location === '/dashboard/analysis' ? 'fill' : 'regular'
					}
					size={24}
				/>
			</Button>
		</BottomBarContainer>
	);
}
