import { Button } from '@/views/components/ui/button/Button';
import { XIcon } from '@phosphor-icons/react';
import {
	FullPageOverlay,
	PopupActions,
	PopupContainer,
	PopupDescription,
	PopupHeader,
	PopupTitle,
} from './styles';

type ChoicePopupProps = {
	title: string;
	description?: string;
	confirm: {
		text: string;
		onConfirm: VoidFunction;
	};
	refuse: {
		text: string;
		onRefuse: VoidFunction;
	};
	onClose: VoidFunction;
};

export function ChoicePopup({
	title,
	description,
	confirm,
	refuse,
	onClose,
}: ChoicePopupProps) {
	return (
		<FullPageOverlay>
			<PopupContainer>
				<PopupHeader>
					<PopupTitle>
						{title}{' '}
						<XIcon
							onClick={onClose}
							weight='bold'
							className='closeIcon'
							size={20}
						/>
					</PopupTitle>
					{description && (
						<PopupDescription>{description}</PopupDescription>
					)}
				</PopupHeader>

				<PopupActions>
					<Button
						onClick={confirm.onConfirm}
						fill_width
						text_align='center'
						variant='danger'
					>
						{confirm.text}
					</Button>
					<Button
						onClick={refuse.onRefuse}
						fill_width
						text_align='center'
						variant='neutral'
					>
						{refuse.text}
					</Button>
				</PopupActions>
			</PopupContainer>
		</FullPageOverlay>
	);
}
