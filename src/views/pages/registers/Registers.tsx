import { useWindowSize } from '@uidotdev/usehooks';
import { Button } from '@components/ui/button/Button';
import {
	RegisterCard,
	RegisterValues,
} from './components/registerCard/RegisterCard';
import {
	Container,
	DropdownAction,
	RegistersList,
	Title,
	TopActions,
} from './Registers.style';
import {
	CaretUpDownIcon,
	FunnelSimpleIcon,
	PlusIcon,
} from '@phosphor-icons/react';
import { useState, useEffect, useRef } from 'react';
import { RegisterOrderPopup } from './components/registerOrderPopup/RegisterOrderPopup';
// import { Spinner } from '@components/ui/spinner/Spinner';
// import { SpinnerOverlay } from '@components/ui/spinner/Spinner.styles';
// import { AnimatePresence } from '@lib/motion.ts';

const mockValues: RegisterValues = {
	initial: 50,
	money: 20,
	creditCard: 200,
	pix: 75,
	expenses: 15,
};

export function Registers() {
	const [showOrderPopup, setShowOrderPopup] = useState<boolean>(false);
	const [order, setOrder] = useState<string>('');

	const size = useWindowSize();
	const isDeviceMobile = size.width! < 768;
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setShowOrderPopup(false);
			}
		};

		if (showOrderPopup) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showOrderPopup]);

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.9, ease: 'easeOut', type: 'tween' }}
		>
			<Title>Registros</Title>

			<TopActions>
				<Button text_align='center' fill_width={isDeviceMobile}>
					<PlusIcon size={16} /> Novo
				</Button>

				<Button
					variant='neutral'
					text_align='center'
					fill_width={isDeviceMobile}
				>
					<FunnelSimpleIcon size={16} />
					Filtrar
				</Button>

				<DropdownAction
					ref={dropdownRef}
					style={{ width: isDeviceMobile ? '100%' : '240px' }}
				>
					<Button
						variant='neutral'
						text_align='center'
						className={`${order && 'selected'}`}
						fill_width={isDeviceMobile}
						onClick={() => setShowOrderPopup((prev) => !prev)}
					>
						<CaretUpDownIcon size={16} />
						{order ? order : 'Ordenar'}
					</Button>

					{showOrderPopup && (
						<RegisterOrderPopup
							order={order}
							onChangeOrder={setOrder}
							onClose={() => setShowOrderPopup(false)}
						/>
					)}
				</DropdownAction>
			</TopActions>

			{/* 
				<SpinnerOverlay> usar quando for carregar
					<Spinner />
				</SpinnerOverlay> 
			*/}

			<RegistersList>
				<RegisterCard values={mockValues} />
				<RegisterCard values={mockValues} />
				<RegisterCard values={mockValues} />
				<RegisterCard values={mockValues} />
				<RegisterCard values={mockValues} />
				<RegisterCard values={mockValues} />
			</RegistersList>
		</Container>
	);
}
