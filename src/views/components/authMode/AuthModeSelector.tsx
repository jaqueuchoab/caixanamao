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
import SignUpMultiset from '../signup/SignUpMultiset.tsx';
import { Button } from '../button/Button.tsx';
import Login from '../login/Login.tsx';

/*
endpoint LOGIN
email: string;
senha: string;
*/

const AuthModeSelector = () => {
  const { themeMode } = useContextTheme();
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const isLogin = currentPath === '/login';

  // Estados para verificação de prenchimento de Login
  const [loginValid, setLoginValid] = React.useState(false);

  const handleLogin = () => {
    navigate('/dashboard');
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
        <FormMultiset>{isLogin ? <Login onValidChange={setLoginValid}/> : <SignUpMultiset />}</FormMultiset>
      </LoginRegister>
      {isLogin ? <Button disabled={!loginValid} onClick={handleLogin}>Entrar</Button> : <Button>Continuar</Button>}
    </AuthModeSelectorContainer>
  );
};

export default AuthModeSelector;
