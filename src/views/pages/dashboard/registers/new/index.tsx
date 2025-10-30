import { ArrowLeftIcon, QuestionIcon } from '@phosphor-icons/react';
import { Container, Content, Form, FormActions, Title } from './styles';
import { useContextTheme } from '@context/ThemeContext';
import { Button } from '@components/ui/button/Button';
import useMultiStepForm from '@/views/hooks/useMultistepForm';

import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { differenceInDays } from 'date-fns';
import { DateRangeStep } from './steps/DateRangeStep';
import { EndSummaryStep } from './steps/EndSummaryStep';
import { EditableRegisterCard } from '../components/EditableRegisterCard';

const schema = z.object({
	startDate: z.date(),
	endDate: z.date(),
	registers: z.array(
		z.object({
			date: z.date(),
			values: z.object({
				initial: z.number(),
				money: z.number(),
				creditCard: z.number(),
				pix: z.number(),
				expenses: z.number(),
			}),
		}),
	),
});

export type Schema = z.infer<typeof schema>;

export function NewRegisterPage() {
	const { theme } = useContextTheme();

	const methods = useForm({
		resolver: zodResolver(schema),
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

	const onSubmit = () => {
		alert('registro criado:\n' + JSON.stringify(methods.getValues()));
	};

	const steps = [
		{
			number: 0,
			title: 'Intervalo de Datas',
			step: <DateRangeStep key="date-range-step" />,
		},
		...cardFillSteps,
		{
			number: 2,
			title: 'Resumo da inserção',
			step: <EndSummaryStep key="end-summary-step" />,
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
				<Button onClick={() => window.history.back()} variant="neutral">
					<ArrowLeftIcon
						size={24}
						weight="bold"
						color={theme.colors.iconsColor}
					/>
				</Button>
				<h1>
					{currentStepIndex === 0
						? 'Novo registro'
						: `${steps[currentStepIndex].title}`}
				</h1>
			</Title>

			<Content>
				<FormProvider {...methods}>
					<Form onSubmit={methods.handleSubmit(onSubmit)}>
						{currentStep}

						<FormActions isFirstStep={isFirstStep}>
							{!isFirstStep && (
								<Button
									text_align="center"
									onClick={previousStep}
									type="button"
									variant="neutral"
								>
									{currentStepIndex === 1
										? 'Cancelar'
										: 'Voltar'}
								</Button>
							)}

							{!isLastStep && (
								<Button
									onClick={handleValidateNextStep}
									type="button"
									text_align="center"
									disabled={
										false /* desativar se estiver enviando*/
									}
								>
									Próximo
								</Button>
							)}

							{isLastStep && (
								<Button
									onClick={handleValidateNextStep}
									type="submit"
									text_align="center"
									disabled={
										false /* desativar se estiver enviando*/
									}
								>
									Enviar
								</Button>
							)}

							{/* botão de submit fica no step EndSummary*/}
						</FormActions>
					</Form>
				</FormProvider>

				<Button text_align="center" fill_width variant="neutral">
					<QuestionIcon size={24} />
					Ajuda
				</Button>
			</Content>
		</Container>
	);
}
