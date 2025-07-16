import { Button } from '@components/ui/button/Button';
import { Container, Options, PopupTitle } from './styles';
import { CheckIcon, XIcon } from '@phosphor-icons/react';
import { useContextTheme } from '@context/ThemeContext';

const orderNames = [
	'Mais antigo',
	'Mais recente',
	'Maior total',
	'Menor total',
];

interface RegisterOrderPopupProps {
	currentOrder: string;
	onChangeCurrentOrder: (name: string) => void;
	onClose: () => void;
}

export function RegisterOrderPopup({
	currentOrder,
	onChangeCurrentOrder,
	onClose,
}: RegisterOrderPopupProps) {
	const { theme } = useContextTheme();

	function handleOrder(order: string) {
		if (order === currentOrder) onChangeCurrentOrder('');
		else onChangeCurrentOrder(order);
		onClose();
	}

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
				{orderNames.map((order, idx) => (
					<Button
						style={{ justifyContent: 'space-between' }}
						onClick={() => handleOrder(order)}
						key={idx}
						variant='neutral'
						className={`${order === currentOrder && 'selected'}`}
					>
						{order}
						{order === currentOrder && (
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
