import { ArrowLeftIcon, QuestionIcon } from '@phosphor-icons/react';
import { Container, Content, Form, FormActions, Title } from './styles';
import { useContextTheme } from '@context/ThemeContext';
import { Button } from '@components/ui/button/Button';
import useMultiStepForm from '@/views/hooks/useMultistepForm';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { api } from '@/lib/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useTransition } from 'react';
import { RegisterInApiType } from '@/@types/register/register';
import { useQuery } from '@tanstack/react-query';
import { fetchRegisterById } from '@/services/fetchRegisterById';
import {
	EditRegisterSchema,
	editRegisterSchema,
} from '@/schemas/edit-register-schema';
import { PatchableRegisterCard } from '../components/Cards/PatchableRegisterCard';
import { PatchSummaryStep } from '../new/steps/PatchSummaryStep';

export function EditRegisterPage() {
	const { id } = useParams();
	const { data: register } = useQuery({
		queryKey: ['registerById'],
		queryFn: () => fetchRegisterById(id!),
		refetchOnMount: true,
	});

	const [isSubmitting, startSubmitTransition] = useTransition();
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const { theme } = useContextTheme();
	const navigate = useNavigate();

	const methods = useForm({
		resolver: zodResolver(editRegisterSchema),
		mode: 'onChange',
		defaultValues: {
			id: register?.id,
			initial: register?.initial,
			money: register?.money,
			creditCard: register?.creditCard,
			pix: register?.pix,
			expenses: register?.expenses,
			startDate: register?.startDate,
			endDate: register?.endDate,
		},
	});

	const { reset } = methods;

	useEffect(() => {
		if (register) {
			reset({
				id: register.id,
				initial: register.initial,
				money: register.money,
				creditCard: register.creditCard,
				pix: register.pix,
				expenses: register.expenses,
				startDate: new Date(register.startDate),
				endDate: new Date(register.endDate),
			});
		}
	}, [register, reset]);

	const handleNextStep = () => {
		nextStep();
	};

	const onSubmit = async (data: EditRegisterSchema) => {
		const registerPayload: Omit<
			RegisterInApiType,
			'iduser' | 'id' | 'data' | 'data_final'
		> = {
			valor_cartao: data.creditCard ?? 0,
			valor_despesas: data.expenses ?? 0,
			valor_especie: data.money ?? 0,
			valor_inicial: data.initial ?? 0,
			valor_pix: data.pix ?? 0,
		};

		try {
			startSubmitTransition(async () => {
				await api.patch(`/registers/${id}`, registerPayload);
				setIsSubmitted(true);
				toast.success('Registro editado com sucesso!', {
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
			title: 'data',
			step: <PatchableRegisterCard key={`register-card-${'0'}`} id={0} />,
		},
		{
			number: 1,
			title: 'Resumo da edição',
			step: <PatchSummaryStep key='patch-summary-step' />,
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
						? 'Editar registro'
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
									onClick={handleNextStep}
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
