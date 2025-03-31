import { List, X } from '@phosphor-icons/react';
import { TopBarContainer } from './TopBar.styles';
import { useState } from 'react';
import { Button } from '../../button/Button';
import { TopBarPopUp } from './TopBarPopUp';
import { AnimatePresence } from 'framer-motion';

export function TopBar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function togglePopUpState() {
		setIsOpen((prev) => !prev);
	}

	return (
		<>
			<TopBarContainer>
				{'<Profile(WIP)/>'}
				<Button variant='neutral' onClick={togglePopUpState}>
					{isOpen ? <X size={28} /> : <List size={28} />}
				</Button>
			</TopBarContainer>
			<AnimatePresence>{isOpen && <TopBarPopUp />}</AnimatePresence>
		</>
	);
}
