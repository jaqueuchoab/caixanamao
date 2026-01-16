import { ReportType } from '@/@types/report';
import { Button } from '@/views/components/ui/button/Button';
import { FullPageOverlay } from '@/views/components/ui/popup/ChoicePopup/styles';
import {
	CashRegisterIcon,
	CreditCardIcon,
	MoneyIcon,
	PixLogoIcon,
	ReceiptIcon,
	ReceiptXIcon,
	XIcon,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ReportDetailPopupContainer, Separator } from './styles';
import { RegisterItem } from '../../../registers/components/Cards/RegisterItem';
import { Total } from '../../../registers/components/Cards/RegisterCard/styles';

type ReportDetailPopupProps = {
	isOpen: boolean;
	toggleIsOpen: VoidFunction;
	report: ReportType;
	reportTitle: string;
};

export function ReportDetailPopup({
	isOpen,
	toggleIsOpen,
	report,
	reportTitle,
}: ReportDetailPopupProps) {
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
					duration: 0.5,
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
				duration: 0.5,
				ease: 'power2.in',
			});

			gsap.to(overlay, {
				opacity: 0,
				duration: 0.5,
				ease: 'power2.in',
				onComplete: () => {
					gsap.set(overlay, { display: 'none' });
				},
			});
		}
	}, [isOpen]);

	if (!isOpen) return null;

	const sumReportValues = (report: ReportType) => {
		if (!report.values) return 0;
		return Object.entries(report.values).reduce((acc, [key, value]) => {
			const num = Number(value);
			if (key === 'valor_despesas') return acc - num;
			return acc + num;
		}, 0);
	};

	return (
		<FullPageOverlay ref={overlayRef}>
			<ReportDetailPopupContainer ref={containerRef}>
				<div id='popup-title'>
					<span id='title'>{reportTitle}</span>
					<Button
						style={{ padding: 0 }}
						variant='neutral'
						onClick={toggleIsOpen}
					>
						<XIcon size={18} />
					</Button>
				</div>

				<div id='popup-content'>
					<div id='popup-infos'>
						<span>
							<span className='infoLabel'>
								Intervalo de datas
							</span>{' '}
							{new Date(report.data).toLocaleDateString('pt-br')}{' '}
							até{' '}
							{new Date(report.data_final).toLocaleDateString(
								'pt-br',
							)}
						</span>

						<span>
							<span className='infoLabel'>Nome</span>{' '}
							{reportTitle}
						</span>
						<span>
							<span className='infoLabel'>Descrição</span>{' '}
							{report.descricao || 'Nenhuma descrição fornecida'}
						</span>
						<span>
							<span className='infoLabel'>Criado em</span>{' '}
							{(report.criado_em &&
								new Date(report.criado_em).toLocaleDateString(
									'pt-br',
									{
										hour: '2-digit',
										minute: '2-digit',
									},
								)) ||
								'Nenhuma descrição fornecida'}
						</span>
						<span>
							<span className='infoLabel'>
								Editado pela última vez em
							</span>{' '}
							{(report.atualizado_em &&
								new Date(
									report.atualizado_em,
								).toLocaleDateString('pt-br', {
									hour: '2-digit',
									minute: '2-digit',
								})) ||
								'Nenhuma descrição fornecida'}
						</span>
					</div>

					<Separator />

					<div id='popup-values'>
						<span id='values-info'>
							Valores somados em todo o período
						</span>

						<RegisterItem
							icon={CashRegisterIcon}
							name='Inicial'
							value={report.values?.valor_inicial ?? 0}
						/>
						<RegisterItem
							icon={MoneyIcon}
							name='Espécie'
							value={report.values?.valor_especie ?? 0}
						/>
						<RegisterItem
							icon={CreditCardIcon}
							name='Cartão'
							value={report.values?.valor_cartao ?? 0}
						/>
						<RegisterItem
							name='Pix'
							value={report.values?.valor_pix ?? 0}
							icon={PixLogoIcon}
						/>
						<RegisterItem
							icon={ReceiptXIcon}
							name='Despesas'
							value={report.values?.valor_despesas ?? 0}
						/>
						<Total
							data-category={
								sumReportValues(report) > 0
									? 'profit'
									: sumReportValues(report) < 0
									? 'loss'
									: ''
							}
						>
							<RegisterItem
								name='Total'
								icon={ReceiptIcon}
								value={sumReportValues(report) || 0}
								style={{ border: 'none' }}
							/>
						</Total>
					</div>
				</div>
			</ReportDetailPopupContainer>
		</FullPageOverlay>
	);
}
