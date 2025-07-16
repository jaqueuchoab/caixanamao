import style from './styles/LoginEmail.module.css';
import googleLogo from '../../assets/google_g_logo.svg';
import { useContextTheme } from '../../context/ThemeContext';
import Input from '../input/Input';
import { Button } from '../button/Button';
import useForm from '../../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';
import { Information } from './Login.styles.ts';


const LoginEmail = () => {
	const { themeMode } = useContextTheme();
	const navigate = useNavigate();
	const email = useForm('email');
	const password = useForm('password_login');

	return (
		<section className={style.mainContent} id={style[themeMode]}>
			<div>
			<Information>Acesse sua Conta ou Cadastre-se</Information>
				<div className={style.inputs}>
					<button>
						<img src={googleLogo} alt='Google logo' />
						Entrar com o Google
					</button>
					<div className={style.divisorInputs}>
						<span className={style.line}></span>
						<span style={{ color: 'var(--placeholder)' }}>ou</span>
						<span className={style.line}></span>
					</div>
					<div className={style.credentials}>
						
					</div>
					<Link
						style={{
							textAlign: 'center',
							color: 'var(--color-green-900)',
							fontSize: 'var(--size-2xs)',
						}}
						to={''}
					>
						Esqueci minha senha
					</Link>
				</div>
			</div>
			<div className={style.buttons}>
				{/*verificar se essa forma de navegaçào vai me permitir ter acesso a rotas definidas em dashboard*/}
				<Link style={{ width: '100%' }} to={'/dashboard'}>
					{email.error === null &&
					email.value.length > 0 &&
					password.error === null &&
					password.value.length > 0 ? (
						<Button onClick={() => localStorage.setItem('email', email.value)}>
							Entrar
						</Button>
					) : (
						<Button disabled>Entrar</Button>
					)}
				</Link>
				<Button
					onClick={() => {
						navigate('/signup', { replace: true });
					}}
				>
					Cadastrar-se
				</Button>
			</div>
		</section>
	);
};

export default LoginEmail;
