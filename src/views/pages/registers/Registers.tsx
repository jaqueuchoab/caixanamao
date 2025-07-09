import { useWindowSize } from '@uidotdev/usehooks';
import { Button } from '@components/ui/button/Button';
import {
	RegisterCard,
	RegisterValues,
} from './components/registerCard/RegisterCard';
import { Container, RegistersList, Title, TopActions } from './Registers.style';
import {
	CaretUpDownIcon,
	FunnelSimpleIcon,
	PlusIcon,
} from '@phosphor-icons/react';
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
	const size = useWindowSize();
	const isDeviceMobile = size.width! < 768;

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
				<Button
					variant='neutral'
					text_align='center'
					fill_width={isDeviceMobile}
				>
					<CaretUpDownIcon size={16} />
					Ordenar
				</Button>
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
