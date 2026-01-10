import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from '@/schemas/login.schema';
import Input from '@/views/components/ui/input/Input';
import { postUserLogin } from '@/services/postUserLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/views/components/ui/button/Button';
import { LoginMainContainer } from './styles';
import artwork_src from '@assets/FallbackArtwork.png';
import { useTransition } from 'react';
import { HeaderLogo } from '@/views/components/ui/header/Header.styles';
import { useContextTheme } from '@/views/context/ThemeContext';
import { getLogo } from '@/views/components/ui/header/Header';
import { Spinner } from '@/views/components/ui/spinner/Spinner';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { replaceUserData } from '@/utils/replace-user-data.util';
import { Location } from 'react-router-dom';

interface LocationState {
	from: Location;
}

export function LoginPage() {
	const navigate = useNavigate();
	const [isSubmitting, setStartSubmitting] = useTransition();
	const { themeMode } = useContextTheme();
	const location = useLocation() as Location<LocationState>;
	const from = location.state?.from?.pathname || '/dashboard';

	const methods = useForm({
		resolver: zodResolver(loginSchema),
		mode: 'onSubmit',
	});

	const handleLogin = async (data: LoginSchema) => {
		setStartSubmitting(async () => {
			try {
				const responseData = await postUserLogin(data);
				console.log('Login bem-sucedido:', responseData);
				replaceUserData(responseData);

				toast.success('Bem vindo(a) de volta!');
				navigate(from, { replace: true });
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

	return (
		<LoginMainContainer>
			<div id='content'>
				<div id='heading'>
					<a href='/'>
						<HeaderLogo
							id='logo'
							src={(() => getLogo(themeMode, 769))()}
							alt={`logo-mode-${themeMode}`}
						/>
					</a>

					<h1>Entrar</h1>
					<p>Digite suas credenciais para entrar.</p>
				</div>
				<FormProvider {...methods}>
					<form
						id='form'
						style={{ width: '100%' }}
						onSubmit={methods.handleSubmit(handleLogin)}
					>
						<Controller
							control={methods.control}
							name={'email'}
							render={({ field }) => (
								<Input
									id='email'
									type='text'
									autoComplete='email'
									value={field.value ?? ''}
									onChange={field.onChange}
									placeholder='Digite seu email'
									error={
										methods.formState.errors?.email?.message
									}
								/>
							)}
						/>
						<Controller
							control={methods.control}
							name={'senha'}
							render={({ field }) => (
								<Input
									id='password'
									type='password'
									autoComplete='current-password'
									value={field.value ?? ''}
									onChange={field.onChange}
									placeholder='No mínimo 8 dígitos'
									error={
										methods.formState.errors?.senha?.message
									}
								/>
							)}
						/>

						<Button
							type='submit'
							fill_width={true}
							text_align='center'
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									<Spinner size={14} />
									<span>Entrando, aguarde...</span>
								</>
							) : (
								'Entrar'
							)}
						</Button>
					</form>
				</FormProvider>

				<a
					style={{ display: isSubmitting ? 'none' : 'inline-block' }}
					id='signup-link'
					href='/auth/signup'
				>
					Ainda não tenho conta
				</a>
			</div>

			<div id='artwork'>
				<img src={artwork_src} alt='artwork' />
			</div>
		</LoginMainContainer>
	);
}
