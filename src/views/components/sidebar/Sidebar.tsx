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
import { useTheme } from '../../hooks/useTheme';
import { useState } from 'react';

const animationVariants = {
	closed: {
		width: '96px',
	},
	open: {
		width: '210px',
	},
};

export function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);
	const theme = useTheme();

	function handleIsOpen() {
		setIsOpen((prev) => !prev);
	}

	// TODO: falta colocar tema

	return (
		<SidebarContainer
			theme={theme}
			variants={animationVariants}
			animate={isOpen ? 'open' : 'closed'}
			initial='open'
			transition={{
				duration: 0.25,
				ease: 'easeOut',
				type: 'tween',
				staggerChildren: 2,
			}}
		>
			<SidebarHeader isOpen={isOpen}>
				{isOpen && (
					<CircleHalf
						weight='fill'
						size={24}
						color={theme.colors.iconsColor}
						onClick={() => {}}
					/>
				)}
				<List
					size={24}
					color={theme.colors.iconsColor}
					onClick={handleIsOpen}
				/>
			</SidebarHeader>

			<SidebarContent>
				<SidebarProfile></SidebarProfile>
				<Button variant='neutral' fillWidth textAlign='center'>
					<Plus size={24} color={theme.colors.iconsColor} />
					{isOpen && 'Novo registro'}
				</Button>
				<SidebarActionsList>
					<Button
						variant='neutral'
						fillWidth
						textAlign={isOpen ? 'left' : 'center'}
					>
						<House size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Página inicial'}
					</Button>
					<Button
						variant='neutral'
						fillWidth
						textAlign={isOpen ? 'left' : 'center'}
					>
						<Notepad size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Registros'}
					</Button>
					<Button
						variant='neutral'
						fillWidth
						textAlign={isOpen ? 'left' : 'center'}
					>
						<CastleTurret size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Administração'}
					</Button>
					<Button
						variant='neutral'
						fillWidth
						textAlign={isOpen ? 'left' : 'center'}
					>
						<FileText size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Relatórios'}
					</Button>
					<Button
						variant='neutral'
						fillWidth
						textAlign={isOpen ? 'left' : 'center'}
					>
						<ChartBar size={24} color={theme.colors.iconsColor} />
						{isOpen && 'Análises'}
					</Button>
				</SidebarActionsList>
			</SidebarContent>

			<SidebarBottomActions>
				<Button
					variant='neutral'
					fillWidth
					textAlign={isOpen ? 'left' : 'center'}
				>
					<Lifebuoy size={24} color={theme.colors.iconsColor} />
					{isOpen && 'Ajuda'}
				</Button>
				<Button
					variant='neutral'
					fillWidth
					textAlign={isOpen ? 'left' : 'center'}
				>
					<Gear size={24} color={theme.colors.iconsColor} />
					{isOpen && 'Configurações'}
				</Button>
				<Button
					variant='neutral'
					fillWidth
					textAlign={isOpen ? 'left' : 'center'}
				>
					<SignOut size={24} color={theme.colors.iconsColor} />
					{isOpen && 'Sair'}
				</Button>
			</SidebarBottomActions>
		</SidebarContainer>
	);
}
