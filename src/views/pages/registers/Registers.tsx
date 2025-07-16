import { useWindowSize } from '@uidotdev/usehooks';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@components/ui/button/Button';
import { RegisterCard } from './components/RegisterCard/RegisterCard';
import {
	Container,
	RelativePopupsContainer,
	RegistersList,
	Title,
	TopActions,
} from './Registers.style';
import {
	ArrowsClockwiseIcon,
	CaretUpDownIcon,
	FunnelSimpleIcon,
	PlusIcon,
	XIcon,
} from '@phosphor-icons/react';
import { RegisterOrderPopup } from './components/RegisterOrderPopup/RegisterOrderPopup';
import { RegisterFilterPopup } from './components/RegisterFilterPopup/RegisterFilterPopup.index';
import { RegisterFilter } from 'src/models/registers/register-filter';
import { fetchRegisters } from '@services/fetchRegisters';
import { SpinnerOverlay } from '@components/ui/spinner/Spinner.styles';
import { Spinner } from '@components/ui/spinner/Spinner';
import { useQuery } from '@tanstack/react-query';

export const filterTypeMap = {
	interval: 'Intervalo',
	day: 'Dia',
	month: 'Mês',
	year: 'Ano',
};

const emptyFilter = {
	type: undefined,
} as RegisterFilter;

export function Registers() {
	const {
		data: registers,
		refetch,
		isLoading,
		isFetching,
		dataUpdatedAt,
	} = useQuery({
		queryKey: ['registers'],
		queryFn: fetchRegisters,
		refetchOnMount: true,
	});
	const lastUpdate = new Date(dataUpdatedAt).toLocaleString('pt-BR');

	const [showOrderPopup, setShowOrderPopup] = useState(false);
	const [order, setOrder] = useState(''); // TODO: funcionalidade de ordenar registros
	const [showFilterPopup, setShowFilterPopup] = useState(false);
	const [filter, setFilter] = useState<RegisterFilter>(emptyFilter); // TODO: funcionalidade de filtrar temporalmente os registros

	const size = useWindowSize();
	const isDeviceMobile = size.width! < 768;
	const dropdownRef = useRef<HTMLDivElement>(null);

	// fecha popup de ordenação ao clicar fora
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setShowOrderPopup(false);
			}
		}
		if (showOrderPopup) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showOrderPopup]);

	// handlers para garantir que só um popup fique aberto
	function handleFilterButtonClick() {
		setShowOrderPopup(false);
		setShowFilterPopup((prev) => !prev);
	}

	function handleOrderButtonClick() {
		setShowFilterPopup(false);
		setShowOrderPopup((prev) => !prev);
	}

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.9, ease: 'easeOut', type: 'tween' }}
		>
			<Title>
				<h1>Registros</h1>
				<span className='lastUpdate'>
					Atualizados pela última vez em {lastUpdate}
				</span>
			</Title>

			<TopActions>
				<Button text_align='center' fill_width={isDeviceMobile}>
					<PlusIcon weight='bold' size={16} /> Novo
				</Button>

				<RelativePopupsContainer ref={dropdownRef}>
					<Button
						variant='neutral'
						text_align='center'
						fill_width={isDeviceMobile}
						className={order ? 'success' : ''}
						onClick={handleOrderButtonClick}
					>
						{order ? (
							<Button
								variant='link'
								style={{ padding: '0px' }}
								title='Remover ordenação atual'
							>
								<XIcon size={16} onClick={() => setOrder('')} />
							</Button>
						) : (
							<CaretUpDownIcon weight='bold' size={16} />
						)}
						{order || 'Ordenar'}
					</Button>

					<Button
						variant='neutral'
						text_align='center'
						fill_width={isDeviceMobile}
						className={filter.type ? 'success' : ''}
						onClick={handleFilterButtonClick}
					>
						{filter.type ? (
							<Button
								variant='link'
								style={{ padding: '0px' }}
								title='Remover filtro atual'
							>
								<XIcon
									size={16}
									weight='bold'
									onClick={() => setFilter(emptyFilter)}
								/>
							</Button>
						) : (
							<FunnelSimpleIcon weight='bold' size={16} />
						)}
						{filter.type ? filterTypeMap[filter.type] : 'Filtrar'}
					</Button>

					<Button
						variant='neutral'
						text_align='center'
						fill_width={isDeviceMobile}
						onClick={() => refetch()}
					>
						<ArrowsClockwiseIcon
							weight='bold'
							size={16}
							className={isFetching ? 'animate-spin' : ''}
						/>
						Atualizar
					</Button>

					{showOrderPopup && (
						<RegisterOrderPopup
							order={order}
							onChangeOrder={setOrder}
							onClose={() => setShowOrderPopup(false)}
						/>
					)}

					{showFilterPopup && (
						<RegisterFilterPopup
							filter={filter}
							onChangeFilter={setFilter}
							onClose={() => setShowFilterPopup(false)}
						/>
					)}
				</RelativePopupsContainer>
			</TopActions>

			{isLoading ||
				(isFetching && (
					<SpinnerOverlay>
						<Spinner />
					</SpinnerOverlay>
				))}

			{registers && registers.length > 0 && (
				<RegistersList>
					{registers.map((data, idx) => (
						<RegisterCard key={idx} register={data} />
					))}
				</RegistersList>
			)}
		</Container>
	);
}
