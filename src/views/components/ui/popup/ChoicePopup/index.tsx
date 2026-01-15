import { Button } from '@/views/components/ui/button/Button';
import { XIcon } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
	FullPageOverlay,
	PopupActions,
	PopupContainer,
	PopupDescription,
	PopupHeader,
	PopupTitle,
} from './styles';

type ChoicePopupProps = {
	isOpen: boolean;
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
	isOpen,
	title,
	description,
	confirm,
	refuse,
	onClose,
}: ChoicePopupProps) {
	const overlayRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const overlay = overlayRef.current;
		const container = containerRef.current;

		if (!overlay || !container) return;

		if (isOpen) {
			// Animação de entrada
			gsap.set(overlay, { display: 'flex' });

			gsap.fromTo(
				overlay,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.25,
					ease: 'power2.out',
				},
			);

			gsap.fromTo(
				container,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.5,
					ease: 'back.out(1.2)',
				},
			);
		} else {
			// Animação de saída
			gsap.to(container, {
				opacity: 0,
				scale: 0.9,
				y: -20,
				duration: 0.2,
				ease: 'power2.in',
			});

			gsap.to(overlay, {
				opacity: 0,
				duration: 0.2,
				ease: 'power2.in',
				onComplete: () => {
					gsap.set(overlay, { display: 'none' });
				},
			});
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<FullPageOverlay ref={overlayRef}>
			<PopupContainer ref={containerRef}>
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
