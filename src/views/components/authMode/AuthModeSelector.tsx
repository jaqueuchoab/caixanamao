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
import { LoginData, loginUser } from '../../../services/userService.ts';

/*
endpoint LOGIN
email: string;
senha: string;
*/

const AuthModeSelector = () => {
  const { themeMode } = useContextTheme();
  const location = useLocation();
  const currentPath = location.pathname;
  console.log('Current Path:', currentPath);
  
  const navigate = useNavigate();
  const isLogin = currentPath === '/login';

  // Estados para verificação de prenchimento de Login
  const [loginValid, setLoginValid] = React.useState(false);
  // Estados para uso dos dados do Login
  const [loginData, setLoginData] = React.useState<LoginData>({
    email: '',
    password: '',
  });

  const handleLoginDataChange = (data: LoginData) => {
    setLoginData(data);
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(loginData);
      console.log('Login bem-sucedido:', response);

      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (error: any) {
      console.error(
        'Erro ao fazer login:',
        error.response?.data || error.message,
      );
    }
  };

  const handleSignUp = () => {
    navigate('credentials');
  }

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
      ) : (
        <Button onClick={handleSignUp} fill_width={true} text_align="center">
          Continuar
        </Button>
      )}
    </AuthModeSelectorContainer>
  );
};

export default AuthModeSelector;
