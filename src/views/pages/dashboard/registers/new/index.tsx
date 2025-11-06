import { ArrowLeftIcon, QuestionIcon } from '@phosphor-icons/react';
import { Container, Content, Form, FormActions, Title } from './styles';
import { useContextTheme } from '@context/ThemeContext';
import { Button } from '@components/ui/button/Button';
import useMultiStepForm from '@/views/hooks/useMultistepForm';

import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { differenceInDays } from 'date-fns';
import { DateRangeStep } from './steps/DateRangeStep';
import { EndSummaryStep } from './steps/EndSummaryStep';
import { EditableRegisterCard } from '../components/Cards/EditableRegisterCard';
import { sumRegisterCategories } from '@/utils/sum-register-categories';
import { api } from '@/lib/api';
import { useNavigate } from 'react-router-dom';
import { useState, useTransition } from 'react';
import {
	NewRegisterSchema,
	newRegisterSchema,
} from '../../../../../schemas/new-register-schema';
import { RegisterInApiType } from '@/@types/register/register';

export function NewRegisterPage() {
	const [isSubmitting, startSubmitTransition] = useTransition();
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const { theme } = useContextTheme();
	const navigate = useNavigate();

	const methods = useForm({
		resolver: zodResolver(newRegisterSchema),
		mode: 'onChange',
	});

	const startDate = methods.watch('startDate');
	const endDate = methods.watch('endDate');
	const daysDiff =
		startDate && endDate ? differenceInDays(endDate, startDate) + 1 : 0;

	const cardFillSteps = Array.from({ length: daysDiff }, (_, k) => {
		return {
			number: k + 1,
			title: 'data ' + k,
			step: <EditableRegisterCard key={`register-card-${k}`} id={k} />,
		};
	});

	const handleValidateNextStep = () => {
		if (daysDiff <= 0) {
			toast.error('Insira um intervalo de datas válido', {
				description: `Pelo menos 1 dia`,
			});
			return;
		}

		nextStep();
	};

	const onSubmit = async (data: NewRegisterSchema) => {
		const registerPayload: Omit<RegisterInApiType, 'id'> = {
			iduser: '840b3494-30bb-4111-a59f-6cf41d48055b', // TODO: substituir pelo usuario da sessao
			data: data.startDate,
			data_final: data.endDate,
			valor_cartao: sumRegisterCategories(data.registers).creditCard,
			valor_despesas: sumRegisterCategories(data.registers).expenses,
			valor_especie: sumRegisterCategories(data.registers).money,
			valor_inicial: sumRegisterCategories(data.registers).initial,
			valor_pix: sumRegisterCategories(data.registers).pix,
		};

		try {
			startSubmitTransition(async () => {
				await api.post('/registers', registerPayload);
				setIsSubmitted(true);
				toast.success('Registro criado com sucesso!', {
					description:
						'Você será redirecionado para a página de registros em instantes',
				});
				setTimeout(() => {
					navigate('/dashboard/registers');
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
			step: <DateRangeStep key='date-range-step' />,
		},
		...cardFillSteps,
		{
			number: 2,
			title: 'Resumo da inserção',
			step: <EndSummaryStep key='end-summary-step' />,
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
						? 'Novo registro'
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

							{/* botão de submit fica no step EndSummary*/}
						</FormActions>
					</Form>
				</FormProvider>

				<Button text_align='center' fill_width variant='neutral'>
					<QuestionIcon size={24} />
					Ajuda
				</Button>
			</Content>
		</Container>
	);
}
