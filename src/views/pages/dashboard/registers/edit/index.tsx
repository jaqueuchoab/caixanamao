import { ArrowLeftIcon, QuestionIcon } from '@phosphor-icons/react';
import { Container, Content, Form, FormActions, Title } from './styles';
import { useContextTheme } from '@context/ThemeContext';
import { Button } from '@components/ui/button/Button';
import useMultiStepForm from '@/views/hooks/useMultistepForm';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRegisterById } from '@/services/fetchRegisterById';
import {
	EditRegisterSchema,
	editRegisterSchema,
} from '@/schemas/edit-register-schema';
import { PatchableRegisterCard } from './components/PatchableRegisterCard';
import { PatchSummaryStep } from './steps/PatchSummaryStep';
import { patchRegisterById } from '@/services/patchRegisterById';

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
			valor_inicial: register?.valor_inicial,
			valor_especie: register?.valor_especie,
			valor_cartao: register?.valor_cartao,
			valor_pix: register?.valor_pix,
			valor_despesas: register?.valor_despesas,
			data: register?.data,
			data_final: register?.data_final,
		},
	});

	const { reset } = methods;

	useEffect(() => {
		if (register) {
			reset({
				id: register.id,
				valor_inicial: register.valor_inicial,
				valor_especie: register.valor_especie,
				valor_cartao: register.valor_cartao,
				valor_pix: register.valor_pix,
				valor_despesas: register.valor_despesas,
				data: new Date(register.data),
				data_final: new Date(register.data_final),
			});
		}
	}, [register, reset]);

	const handleNextStep = async () => {
		const isValid = await methods.trigger();
		if (isValid) {
			nextStep();
		}
	};

	const onSubmit = async (data: EditRegisterSchema) => {
		if (register) {
			const registerPayload: Omit<
				EditRegisterSchema,
				'id' | 'data' | 'data_final'
			> = {
				valor_cartao: data.valor_cartao ?? 0,
				valor_despesas: data.valor_despesas ?? 0,
				valor_especie: data.valor_especie ?? 0,
				valor_inicial: data.valor_inicial ?? 0,
				valor_pix: data.valor_pix ?? 0,
			};

			try {
				startSubmitTransition(async () => {
					await patchRegisterById(id!, registerPayload);
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
			step: <PatchSummaryStep key='pre-submit-patch-summary-step' />,
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
									disabled={isSubmitting}
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
