import { SignupSchema, signupSchema } from '@/schemas/signup.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { LoginMainContainer } from '../login/styles';
import { HeaderLogo } from '@/views/components/ui/header/Header.styles';
import { getLogo } from '@/views/components/ui/header/Header';
import { useContextTheme } from '@/views/context/ThemeContext';
import { postUserSignup } from '@/services/postUserLogin';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { Button } from '@/views/components/ui/button/Button';
import { Spinner } from '@/views/components/ui/spinner/Spinner';
import artwork_src from '@assets/FallbackArtwork.png';
import { useTransition } from 'react';
import { IdentificationStep } from './IdentificationStep';
import { CredentialsStep } from './CredentialsStep';
import useMultiStepForm from '@/views/hooks/useMultistepForm';
import { FormActions } from '../../dashboard/registers/new/styles';
import { ProgressIndicator } from './ProgressIndicator/ProgressIndicator';
import { replaceUserData } from '@/utils/replace-user-data.util';

export function SignupPage() {
	const { themeMode } = useContextTheme();
	const [isSubmitting, setStartSubmitting] = useTransition();
	const navigate = useNavigate();

	const methods = useForm({
		resolver: zodResolver(signupSchema),
		mode: 'onChange',
	});

	const handleValidateNextStep = async () => {
		const fieldsToValidate: Array<keyof SignupSchema> = [
			'nome',
			'cpf',
			'nasc',
			'cargo',
		];

		const isValid = await methods.trigger(fieldsToValidate);
		if (isValid) {
			nextStep();
		}
	};

	const onSubmit = async (data: SignupSchema) => {
		setStartSubmitting(async () => {
			try {
				const responseData = await postUserSignup({
					nome: data.nome,
					cpf: data.cpf,
					nasc: data.nasc.toISOString(),
					cargo: data.cargo,
					email: data.email,
					senha: data.senha,
					senha_confirmacao: data.senha_confirmacao,
				});
				replaceUserData(responseData);

				toast.success('Conta criada com sucesso!', {
					description: `Bem vindo(a), ${data.nome.split(' ')[0]}!`,
				});
				navigate('/dashboard');
			} catch (e) {
				if (e instanceof AxiosError) {
					console.error(e);
					toast.error(e.response?.data?.message);
				} else if (e instanceof Error) {
					toast.error(e.message);
				}
			}
		});
	};

	const steps = [
		{
			number: 0,
			title: 'Identificação',
			step: <IdentificationStep key='identification-step' />,
		},
		{
			number: 1,
			title: 'Credenciais',
			step: <CredentialsStep key='credentials-step' />,
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
		<LoginMainContainer>
			<div id='content'>
				<div id='heading'>
					<a href='/'>
						<HeaderLogo
							id='logo'
							src={(() =>
								getLogo(themeMode, 769))()}
							alt={`logo-mode-${themeMode}`}
						/>
					</a>

					<h1>Cadastrar-se</h1>
					<p>Vamos criar sua conta em dois rápidos passos</p>
				</div>
				<FormProvider {...methods}>
					<form
						id='form'
						style={{ width: '100%' }}
						onSubmit={methods.handleSubmit(onSubmit)}
					>
						<ProgressIndicator
							currentStepIndex={currentStepIndex}
						/>
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
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<Spinner size={14} />
											<span>Enviando, aguarde...</span>
										</>
									) : (
										'Enviar'
									)}
								</Button>
							)}
						</FormActions>
					</form>
				</FormProvider>

				<a
					style={{ display: isSubmitting ? 'none' : 'inline-block' }}
					id='signup-link'
					href='/auth/login'
				>
					Já tenho conta
				</a>
			</div>

			<div id='artwork'>
				<img src={artwork_src} alt='artwork' />
			</div>
		</LoginMainContainer>
	);
}
