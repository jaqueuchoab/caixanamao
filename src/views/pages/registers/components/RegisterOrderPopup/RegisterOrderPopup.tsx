import { Button } from '@components/ui/button/Button';
import { Container, Options, PopupTitle } from './RegisterOrderPopup.styles';
import { CheckIcon, XIcon } from '@phosphor-icons/react';
import { useContextTheme } from '@context/ThemeContext';

const orderNames = [
	'Mais antigo',
	'Mais recente',
	'Maior total',
	'Menor total',
];

interface RegisterOrderPopupProps {
	order: string;
	onChangeOrder: (name: string) => void;
	onClose: () => void;
}

export function RegisterOrderPopup({
	order,
	onChangeOrder,
	onClose,
}: RegisterOrderPopupProps) {
	const { theme } = useContextTheme();

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3, ease: 'easeOut', type: 'tween' }}
		>
			<PopupTitle>
				<h3>Ordenar por</h3>
				<XIcon
					size={20}
					weight='bold'
					onClick={onClose}
					style={{ cursor: 'pointer' }}
				/>
			</PopupTitle>

			<Options>
				{orderNames.map((item, idx) => (
					<Button
						style={{ justifyContent: 'space-between' }}
						onClick={() => {
							if (item === order) onChangeOrder('');
							else onChangeOrder(item);
							onClose();
						}}
						key={idx}
						variant='neutral'
						className={`${item === order && 'selected'}`}
					>
						{item}
						{item === order && (
							<CheckIcon
								weight='bold'
								color={theme.colors.texts.highlight}
								size={18}
							/>
						)}
					</Button>
				))}
			</Options>
		</Container>
	);
}
