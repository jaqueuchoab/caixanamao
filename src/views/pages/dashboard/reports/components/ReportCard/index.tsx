import { ReportType } from '@/@types/report';
import { Button } from '@/views/components/ui/button/Button';

import { FileArrowDownIcon, TrashIcon } from '@phosphor-icons/react';
import { useState, useTransition } from 'react';
import { ReportContainer } from './styles';
import { ReportDetailPopup } from '../ReportDetailPopup';
import { api } from '@/lib/api';
import { ChoicePopup } from '@/views/components/ui/popup/ChoicePopup';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { ReportPDF } from '../ReportPDF';
import { Spinner } from '@/views/components/ui/spinner/Spinner';
import { useUserStore } from '@/views/store/user.store';
import { toast } from 'sonner';

type ReportCardProps = {
	report: ReportType;
};

export function ReportCard({ report }: ReportCardProps) {
	const [isLoadingReportPDF, startIsLoadingPDFTransition] = useTransition();
	const [isReportDetailPopupOpen, setIsReportDetailPopupOpen] =
		useState<boolean>(false);

	const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);

	const toggleDeletePopup = () => {
		setIsDeletePopupOpen((prev) => !prev);
	};

	const handleDeleteReport = async () => {
		await api.delete(`/reports/${report.id}`);
		window.location.reload();
	};

	const toggleReportDetailPopup = () => {
		setIsReportDetailPopupOpen((prev) => !prev);
	};

	const reportTitle = report.nome || `Relatório #${report.id}`;

	const { user } = useUserStore();
	const saveReportPDF = async () => {
		startIsLoadingPDFTransition(async () => {
			try {
				const { data } = await api.get<ReportType>(
					`/reports/${report.id}?includeRegisters=true`,
				);

				if (!data.registers) {
					throw new Error('Nenhum registro encontrado');
				}

				const doc = (
					<ReportPDF
						report={report}
						registers={data.registers}
						user={user}
					/>
				);

				const blob = await pdf(doc).toBlob();
				saveAs(blob, `relatorio-${report.id}.pdf`);
			} catch (error) {
				if (error instanceof Error) {
					toast.error('Erro ao gerar PDF', {
						description: error.message,
					});
					console.error('Erro ao gerar PDF:', error.message);
				}
			}
		});
	};

	return (
		<>
			<ReportDetailPopup
				report={report}
				reportTitle={reportTitle}
				isOpen={isReportDetailPopupOpen}
				toggleIsOpen={toggleReportDetailPopup}
			/>
			<ChoicePopup
				isOpen={isDeletePopupOpen}
				title='Tem certeza que deseja excluir o relatório?'
				description='Isso apagará para sempre'
				onClose={toggleDeletePopup}
				confirm={{
					text: 'Apagar',
					onConfirm: handleDeleteReport,
				}}
				refuse={{
					text: 'Cancelar',
					onRefuse: toggleDeletePopup,
				}}
			/>
			<ReportContainer>
				<div id='title-container'>
					<div
						style={{
							display: 'flex',
							flexFlow: 'column wrap',
							gap: 8,
						}}
					>
						<span id='title'>{reportTitle}</span>
						<span id='date-interval'>
							{new Date(report.data).toLocaleDateString('pt-br')}{' '}
							até{' '}
							{new Date(report.data_final).toLocaleDateString(
								'pt-br',
							)}
						</span>
					</div>

					<div style={{ display: 'flex', gap: 16 }}>
						<Button
							style={{ padding: 0 }}
							text_align='center'
							variant='neutral'
							onClick={toggleDeletePopup}
						>
							<TrashIcon size={18} />
						</Button>
					</div>
				</div>

				<div id='description'>
					{report.descricao || 'Nenhuma descrição fornecida'}
				</div>
				<div id='actions'>
					<Button
						style={{ padding: 0 }}
						variant='link'
						onClick={toggleReportDetailPopup}
					>
						Ver detalhes
					</Button>

					<Button
						style={{ padding: 0 }}
						text_align='center'
						title='Fazer download do relatório'
						variant='link'
						onClick={saveReportPDF}
					>
						{isLoadingReportPDF ? (
							<Spinner size={20} />
						) : (
							<FileArrowDownIcon size={20} />
						)}
					</Button>
					{/* todo: implementar função de download do relatório */}
				</div>
			</ReportContainer>
		</>
	);
}
