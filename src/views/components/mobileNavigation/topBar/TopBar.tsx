import { List, X } from '@phosphor-icons/react';
import { TopBarContainer } from './TopBar.styles';
import { useState } from 'react';
import { Button } from '@components/ui/button/Button';
import { TopBarPopUp } from './TopBarPopUp';
import { AnimatePresence } from 'src/lib/motion.ts';
import { Profile } from '@components/sidebar/profile/Profile';

export function TopBar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function togglePopUpState() {
		setIsOpen((prev) => !prev);
	}

	return (
		<>
			<TopBarContainer>
				<Profile />
				<Button variant='neutral' onClick={togglePopUpState}>
					{isOpen ? <X size={28} /> : <List size={28} />}
				</Button>
			</TopBarContainer>
			<AnimatePresence>{isOpen && <TopBarPopUp />}</AnimatePresence>
		</>
	);
}
