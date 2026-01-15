import { ArrowLeftIcon, QuestionIcon } from '@phosphor-icons/react';
import { useContextTheme } from '@context/ThemeContext';
import { Button } from '@components/ui/button/Button';
import useMultiStepForm from '@/views/hooks/useMultistepForm';

import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { differenceInDays } from 'date-fns';
import { api } from '@/lib/api';
import { useNavigate } from 'react-router-dom';
import { useState, useTransition } from 'react';
import { useUserStore } from '@/views/store/user.store';
import { DateRangeStep } from '../../registers/new/steps/DateRangeStep';
import {
	Container,
	Content,
	Form,
	FormActions,
	Title,
} from '../../registers/new/styles';
import { newReportSchema, NewReportSchema } from '@/schemas/new-report-schema';
import { ReportType } from '@/@types/report';
import { ExtraInfoStep } from '../steps/ExtraInfoStep';

export function NewReportPage() {
	const [isSubmitting, startSubmitTransition] = useTransition();
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const { theme } = useContextTheme();
	const navigate = useNavigate();
	const { user } = useUserStore();

	const methods = useForm({
		resolver: zodResolver(newReportSchema),
		mode: 'onChange',
		defaultValues: {
			arquivo_path: null,
			descricao: '',
			iduser: user.iduser,
			nome: '',
		},
	});

	const startDate = methods.watch('data');
	const endDate = methods.watch('data_final');
	const daysDiff =
		startDate && endDate ? differenceInDays(endDate, startDate) + 1 : 0;

	const handleValidateNextStep = () => {
		if (daysDiff <= 0) {
			toast.error('Insira um intervalo de datas válido', {
				description: `Pelo menos 1 dia`,
			});
			return;
		}

		nextStep();
	};

	const onSubmit = async (data: NewReportSchema) => {
		console.log(methods.formState.errors);

		const payload: Omit<ReportType, 'id' | 'criado_em' | 'atualizado_em'> =
			{
				iduser: user.iduser,
				nome: data.nome ?? null,
				descricao: data.descricao ?? null,
				data: data.data,
				data_final: data.data_final,
				arquivo_path: data.arquivo_path ?? null,
			};

		try {
			startSubmitTransition(async () => {
				await api.post('/reports', payload);
				setIsSubmitted(true);
				toast.success('Relatório criado com sucesso!', {
					description:
						'Você será redirecionado para a página de relatórios em instantes e poderá visualizá-lo',
				});
				setTimeout(() => {
					navigate('/dashboard/reports');
				}, 800);
			});
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
		}
	};

	const steps = [
		{
			number: 0,
			title: 'Intervalo de Datas',
			step: <DateRangeStep resource='reports' key='date-range-step' />,
		},
		{
			number: 1,
			title: 'Informações extras',
			step: <ExtraInfoStep key='extra-info-step' />,
		},
	];

	const {
		currentStep,
		isFirstStep,
		isLastStep,
		nextStep,
		previousStep,
		currentStepIndex,
	} = useMultiStepForm({ steps });

	return (
		<Container>
			<Title>
				<Button onClick={() => window.history.back()} variant='neutral'>
					<ArrowLeftIcon
						size={24}
						weight='bold'
						color={theme.colors.iconsColor}
					/>
				</Button>
				<h1>
					{isFirstStep
						? 'Novo Relatório'
						: isLastStep
						? 'Resumo'
						: 'Preenchimento'}
				</h1>
			</Title>

			<Content>
				<FormProvider {...methods}>
					<Form onSubmit={methods.handleSubmit(onSubmit)}>
						{currentStep}

						<FormActions isFirstStep={isFirstStep}>
							{!isFirstStep && (
								<Button
									text_align='center'
									onClick={previousStep}
									type='button'
									variant='neutral'
								>
									{currentStepIndex === 1
										? 'Cancelar'
										: 'Voltar'}
								</Button>
							)}

							{!isLastStep && (
								<Button
									onClick={handleValidateNextStep}
									type='button'
									text_align='center'
								>
									Próximo
								</Button>
							)}

							{isLastStep && (
								<Button
									type='submit'
									text_align='center'
									disabled={isSubmitting || isSubmitted}
								>
									{isSubmitted ? 'Enviado' : 'Enviar'}
								</Button>
							)}
						</FormActions>
					</Form>
				</FormProvider>

				<Button text_align='center' fill_width variant='neutral'>
					<QuestionIcon size={24} />
					Ajuda
					{/* TODO: popup de ajuda em novo registro */}
				</Button>
			</Content>
		</Container>
	);
}
