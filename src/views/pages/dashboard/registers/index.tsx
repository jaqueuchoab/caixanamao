import { Button } from '@components/ui/button/Button';
import { RegisterCardSkeleton } from '@components/ui/skeleton/styles';
import {
	ArrowsClockwiseIcon,
	FunnelIcon,
	PlusIcon,
	RocketIcon,
	SortAscendingIcon,
} from '@phosphor-icons/react';
import { fetchRegisters } from '@services/fetchRegisters';
import { useQuery } from '@tanstack/react-query';
import { RegisterCard } from './components/Cards/RegisterCard';
import {
	Container,
	EmptyRegisterListContainer,
	RegistersContainer,
	RegistersList,
	Title,
	TopActions,
} from './styles';
import { useNavigate } from '@lib/router';

export function RegistersPage() {
	const {
		data: registers,
		isLoading,
		isFetching,
		isRefetching,
		dataUpdatedAt,
		refetch,
	} = useQuery({
		queryKey: ['registers'],
		queryFn: fetchRegisters,
	});

	const lastUpdate = new Date(dataUpdatedAt).toLocaleString('pt-BR');
	const navigate = useNavigate();

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
					style={{ fontSize: 12 }}
					onClick={() => navigate('/dashboard/registers/new')}
					text_align='center'
				>
					<PlusIcon weight='bold' size={16} /> Novo
				</Button>

				<Button
					style={{ fontSize: 12 }}
					text_align='center'
					variant='neutral'
				>
					<FunnelIcon weight='bold' size={16} /> Filtrar
				</Button>

				<Button
					style={{ fontSize: 12 }}
					text_align='center'
					variant='neutral'
				>
					<SortAscendingIcon weight='bold' size={16} /> Ordenar
				</Button>

				<Button
					style={{ fontSize: 12 }}
					text_align='center'
					variant='neutral'
					disabled={isRefetching}
					onClick={() => refetch()}
				>
					<ArrowsClockwiseIcon weight='bold' size={16} /> Atualizar
				</Button>
			</TopActions>

			<RegistersContainer>
				<RegistersList>
					{(isLoading || isFetching) &&
						Array.from({ length: 3 }, (_, idx) => (
							<RegisterCardSkeleton key={idx} />
						))}

					{!isFetching && registers?.length === 0 ? (
						<EmptyRegisterListContainer>
							<RocketIcon size={90} />
							Nenhum registro para mostrar.
						</EmptyRegisterListContainer>
					) : (
						registers?.map((data, idx) => (
							<RegisterCard
								canEdit
								canDelete
								key={idx}
								register={data}
							/>
						))
					)}
				</RegistersList>
			</RegistersContainer>
		</Container>
	);
}
