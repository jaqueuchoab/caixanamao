import { Button } from '@components/ui/button/Button';
import { RegisterCardSkeleton } from '@components/ui/skeleton/styles';
import {
	emptyFilter,
	filterTypeMap,
	RegisterFilter,
} from '@models/registers/register-filter';
import {
	ArrowsClockwiseIcon,
	CaretUpDownIcon,
	FunnelSimpleIcon,
	PlusIcon,
	XIcon,
} from '@phosphor-icons/react';
import { fetchRegisters } from '@services/fetchRegisters';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { RegisterCard } from './components/RegisterCard';
import { RegisterFilterPopup } from './components/RegisterFilterPopup';
import { RegisterOrderPopup } from './components/RegisterOrderPopup';
import {
	Container,
	RegistersList,
	RelativePopupsContainer,
	Title,
	TopActions,
} from './styles';
import { useNavigate } from '@lib/router';

export function RegistersPage() {
	const {
		data: registers,
		refetch,
		isLoading,
		isFetching,
		dataUpdatedAt,
	} = useQuery({
		queryKey: ['registers'],
		queryFn: fetchRegisters,
		refetchOnMount: false,
	});
	const lastUpdate = new Date(dataUpdatedAt).toLocaleString('pt-BR');

	const [showOrderPopup, setShowOrderPopup] = useState(false);
	const [currentOrder, setCurrentOrder] = useState('');
	const [showFilterPopup, setShowFilterPopup] = useState(false);
	const [currentFilter, setCurrentFilter] =
		useState<RegisterFilter>(emptyFilter);

	const dropdownRef = useRef<HTMLDivElement>(null);

	const navigate = useNavigate();

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
		<Container>
			<Title>
				<h1>Registros</h1>
				<span className='lastUpdate'>
					Atualizados pela última vez em {lastUpdate}
				</span>
			</Title>

			<TopActions>
				<Button
					onClick={() => navigate('/dashboard/registers/new')}
					text_align='center'
				>
					<PlusIcon weight='bold' size={16} /> Novo
				</Button>

				<RelativePopupsContainer ref={dropdownRef}>
					<Button
						variant='neutral'
						text_align='center'
						className={currentOrder ? 'success' : ''}
						onClick={handleOrderButtonClick}
					>
						{currentOrder ? (
							<span
								className='removeCurrentModifier'
								role='button'
								aria-label='Remover ordenação'
								tabIndex={0}
								style={{
									display: 'inline-flex',
									cursor: 'pointer',
								}}
								onClick={(e) => {
									e.stopPropagation();
									setCurrentOrder('');
								}}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										e.stopPropagation();
										setCurrentOrder('');
									}
								}}
							>
								<XIcon size={16} weight='bold' />
							</span>
						) : (
							<CaretUpDownIcon weight='bold' size={16} />
						)}
						{currentOrder || 'Ordenar'}
					</Button>

					<Button
						variant='neutral'
						text_align='center'
						className={currentFilter.type ? 'success' : ''}
						onClick={handleFilterButtonClick}
					>
						{currentFilter.type ? (
							<span
								className='removeCurrentModifier'
								onClick={(e) => {
									e.stopPropagation();
									setCurrentFilter(emptyFilter);
								}}
								role='button'
								aria-label='Limpar filtro'
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										e.stopPropagation();
										setCurrentFilter(emptyFilter);
									}
								}}
								style={{ display: 'inline-flex' }}
							>
								<XIcon size={16} weight='bold' />
							</span>
						) : (
							<FunnelSimpleIcon weight='bold' size={16} />
						)}
						{currentFilter.type
							? filterTypeMap[currentFilter.type]
							: 'Filtrar'}
					</Button>

					<Button
						onClick={() => refetch()}
						disabled={isFetching}
						variant='neutral'
						text_align='center'
						style={{ backgroundColor: 'transparent' }}
					>
						<ArrowsClockwiseIcon
							weight='bold'
							size={16}
							className={isFetching ? 'animate-spin' : ''}
						/>
						{isFetching ? 'Atualizando' : 'Atualizar'}
					</Button>

					{showOrderPopup && (
						<RegisterOrderPopup
							currentOrder={currentOrder}
							onChangeCurrentOrder={setCurrentOrder}
							onClose={() => setShowOrderPopup(false)}
						/>
					)}

					{showFilterPopup && (
						<RegisterFilterPopup
							currentFilter={currentFilter}
							onChangeCurrentFilter={setCurrentFilter}
							onClose={() => setShowFilterPopup(false)}
						/>
					)}
				</RelativePopupsContainer>
			</TopActions>

			<RegistersList>
				{(isLoading || isFetching) &&
					Array.from({ length: 3 }, (_, idx) => (
						<RegisterCardSkeleton key={idx} />
					))}

				{!isFetching &&
					registers &&
					registers.map((data, idx) => (
						<RegisterCard
							canEdit
							canDelete
							key={idx}
							register={data}
						/>
					))}
			</RegistersList>
		</Container>
	);
}
