import { Button } from '@components/ui/button/Button';
import { RegisterCardSkeleton } from '@components/ui/skeleton/styles';
import {
	ArrowsClockwiseIcon,
	FunnelIcon,
	PlusIcon,
	RocketIcon,
	SortAscendingIcon,
} from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import {
	Container,
	EmptyRegisterListContainer,
	RegistersContainer,
	RegistersList,
	Title,
	TopActions,
} from '../registers/styles';
import { useNavigate } from '@lib/router';
import { fetchReports } from '@/services/fetchReports';
import { ReportCard } from './components/ReportCard';

export function ReportsPage() {
	const {
		data: reports,
		isLoading,
		isFetching,
		isRefetching,
		refetch,
		dataUpdatedAt,
	} = useQuery({
		queryKey: ['reports'],
		queryFn: fetchReports,
	});

	const lastUpdate = new Date(dataUpdatedAt).toLocaleString('pt-BR');
	const navigate = useNavigate();

	return (
		<Container>
			<Title>
				<h1>Relatórios</h1>
				<span className='lastUpdate'>
					Atualizados pela última vez em {lastUpdate}
				</span>
			</Title>

			<TopActions>
				<Button
					style={{ fontSize: 12 }}
					onClick={() => navigate('/dashboard/reports/new')}
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

					{!isFetching && reports?.length === 0 ? (
						<EmptyRegisterListContainer>
							<RocketIcon size={90} />
							Nenhum relatório para mostrar.
						</EmptyRegisterListContainer>
					) : (
						reports?.map((report) => (
							<ReportCard key={report.id} report={report} />
						))
					)}
				</RegistersList>
			</RegistersContainer>
		</Container>
	);
}
