import React from 'react';
import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import { useContextTheme } from '../../context/ThemeContext.tsx';
import {
  Information,
  AuthModeSelectorContainer,
  LoginRegister,
} from './AuthModeSelector.styles.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import FormMultiset from '../formMultiset/FormMultiset.tsx';
import SignUpMultiset from '../signup/SignUpStep.tsx';
import { Button } from '../button/Button.tsx';
import Login from '../login/Login.tsx';
import { loginUser, signUpUser } from '../../../services/userService.ts';
import { LoginData } from '../../../@types/user-types.ts';
import { useFormStore } from '../../store/useFormStore.ts';

const AuthModeSelector = () => {
  const { themeMode } = useContextTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();
  const isLogin = currentPath === '/login';
  const isSignUp = currentPath === '/signup';
  const isCredentials = currentPath.includes('credentials');

  // Estados para verificação de prenchimento de Login, para habilitar o botão de Login
  const [loginValid, setLoginValid] = React.useState(false);
  // Estados para uso dos dados do Login, para enviar ao backend
  const [loginData, setLoginData] = React.useState<LoginData>({
    email: '',
    senha: '',
  });

  const {
    formData,
    isIdentificationComplete,
    isCredentialsComplete,
    isComplete,
  } = useFormStore();

  // Função que atualiza os dados do Login quando o usuário digita no formulário
  const handleLoginDataChange = (data: LoginData) => {
    setLoginData(data);
  };

  // Função que realiza o login, enviando os dados para o backend
  const handleLogin = async () => {
    try {
      const response = await loginUser(loginData);
      console.log('Login bem-sucedido:', response);

      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (error: string | any) {
      // mensagem de erro para o usuário
      console.error('Erro ao fazer login:', error.msg);
    }
  };

  // Função que redireciona o usuário para a página de cadastro, caso ele não esteja lá
  const handleSignUp = async () => {
    try {
      if (isComplete()) {
        const response = await signUpUser(formData);
        console.log('Cadastro bem-sucedido:', response);
        navigate('/dashboard');
      }
    } catch (error:  string | any) {
      // mensagem de erro para o usuário
      console.error('Erro ao fazer cadastro:', error.msg);
    }
  };

  return (
    <AuthModeSelectorContainer>
      <img
        src={themeMode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
        alt="cnm_logohorz"
        style={{ height: 'var(--size-3md)' }}
      />
      <LoginRegister>
        <Information>Acesse sua Conta ou Cadastre-se</Information>
        <FormMultiset>
          {isLogin ? (
            <Login
              onValidChange={setLoginValid}
              onDataChange={handleLoginDataChange}
            />
          ) : (
            <SignUpMultiset />
          )}
        </FormMultiset>
        {}
      </LoginRegister>
      {isLogin ? (
        <Button
          disabled={!loginValid}
          onClick={handleLogin}
          fill_width={true}
          text_align="center"
        >
          Entrar
        </Button>
      ) : null}
      {isSignUp ? (
        <Button
          onClick={() => navigate('credentials')}
          fill_width={true}
          text_align="center"
          disabled={!isIdentificationComplete()}
        >
          Continuar
        </Button>
      ) : null}

      {isCredentials ? (
        <Button
          onClick={handleSignUp}
          fill_width={true}
          text_align="center"
          disabled={!isCredentialsComplete()}
        >
          Confirmar
        </Button>
      ) : null}
    </AuthModeSelectorContainer>
  );
};

export default AuthModeSelector;
