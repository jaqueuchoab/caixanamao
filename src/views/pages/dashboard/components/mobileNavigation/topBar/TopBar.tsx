import { List, X } from '@phosphor-icons/react';
import { TopBarContainer } from './TopBar.styles';
import { useState } from 'react';
import { Button } from '@components/ui/button/Button';
import { TopBarPopUp } from './TopBarPopUp';
import { Profile } from '../../sidebar/profile/Profile';

export function TopBar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function togglePopUpState() {
		setIsOpen((prev) => !prev);
	}

	return (
		<>
			<TopBarContainer>
				<Profile />
				<Button
					variant="neutral"
					onClick={(e) => {
						e.stopPropagation();
						togglePopUpState();
					}}
				>
					{isOpen ? <X size={24} /> : <List size={24} />}
				</Button>
			</TopBarContainer>
			{isOpen && <TopBarPopUp key="topbar-popup" />}
		</>
	);
}
