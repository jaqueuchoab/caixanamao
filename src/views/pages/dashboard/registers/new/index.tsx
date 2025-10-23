import { ArrowLeftIcon, QuestionIcon } from '@phosphor-icons/react';
import { Container, Content, Form, FormActions, Title } from './styles';
import { useContextTheme } from '@context/ThemeContext';
import { Button } from '@components/ui/button/Button';
import useMultiStepForm from '@/views/hooks/useMultistepForm';
import { useRegisterStepsContext } from '@/views/context/RegisterStepsContext';

import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

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

// TODO: corrigir submit
export function NewRegisterPage() {
	const { theme } = useContextTheme();
	const { steps, daysDiff } = useRegisterStepsContext();
	const {
		currentStep,
		isFirstStep,
		isLastStep,
		nextStep,
		previousStep,
		currentStepIndex,
	} = useMultiStepForm({ steps });

	const methods = useForm({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const handleValidateNextStep = () => {
		if (daysDiff <= 0) {
			toast.error('Insira um intervalo de datas válido', {
				description: `O intervalo selecionado tem ${daysDiff} dias`,
			});
			return;
		}

		nextStep();
	};

	const onSubmit = () => {
		alert('registro criado:\n' + JSON.stringify(methods.getValues()));
	};

	return (
		<Container>
			<Title>
				<Button
					onClick={() => window.history.back()}
					variant="neutral"
					style={{ padding: 0 }}
				>
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
									variant="neutral"
								>
									Voltar
								</Button>
							)}

							<Button
								onClick={handleValidateNextStep}
								type={isLastStep ? 'submit' : 'button'}
								text_align="center"
								disabled={
									false /* desativar se estiver enviando*/
								}
							>
								{isLastStep ? 'Enviar' : 'Próximo'}
							</Button>

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
