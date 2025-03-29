import {
	CastleTurret,
	ChartBar,
	CircleHalf,
	FileText,
	Gear,
	House,
	Lifebuoy,
	List,
	Notepad,
	Plus,
	SignOut,
} from '@phosphor-icons/react';
import { Button } from '../button/Button';
import {
	SidebarActionsList,
	SidebarBottomActions,
	SidebarContainer,
	SidebarContent,
	SidebarHeader,
	SidebarProfile,
} from './Sidebar.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export function Sidebar() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(true);
	const { theme, switchTheme } = useTheme();

	function handleIsOpen() {
		setIsOpen((prev) => !prev);
	}

	return (
		<SidebarContainer
			$theme={theme}
			animate={{ width: isOpen ? 256 : 96 }}
			transition={{
				duration: 0.25,
				ease: 'easeOut',
				type: 'tween',
				staggerChildren: 2,
			}}
		>
			<SidebarHeader $is_open={isOpen}>
				{isOpen && (
					<Button variant='neutral' onClick={switchTheme}>
						<CircleHalf
							weight='fill'
							size={24}
							color={theme.colors.iconsColor}
						/>
					</Button>
				)}
				<Button variant='neutral' onClick={handleIsOpen}>
					<List size={24} color={theme.colors.iconsColor} />
				</Button>
			</SidebarHeader>

			<SidebarContent>
				<SidebarProfile></SidebarProfile>
				<Button variant='primary' fill_width text_align='center'>
					<Plus size={24} color={theme.colors.buttons.primary.text} />
					{isOpen && 'Novo registro'}
				</Button>

				<SidebarActionsList>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
					>
						<House size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Página inicial'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
					>
						<Notepad size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Registros'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
					>
						<CastleTurret size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Administração'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
					>
						<FileText size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Relatórios'}
					</Button>
					<Button
						variant='neutral'
						fill_width
						text_align={isOpen ? 'left' : 'center'}
					>
						<ChartBar size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Análises'}
					</Button>
				</SidebarActionsList>
			</SidebarContent>

			<SidebarBottomActions>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
				>
					<Lifebuoy size={24} color={theme.colors.iconsColor} />
					{isOpen && 'Ajuda'}
				</Button>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
				>
					<Gear size={24} color={theme.colors.iconsColor} />
					{isOpen && 'Configurações'}
				</Button>
				<Button
					variant='neutral'
					fill_width
					text_align={isOpen ? 'left' : 'center'}
					onClick={() => navigate('/')}
				>
					<SignOut size={24} color={theme.colors.iconsColor} />
					{isOpen && 'Sair'}
				</Button>
			</SidebarBottomActions>
		</SidebarContainer>
	);
}
