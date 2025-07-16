import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import { useContextTheme } from '../../context/ThemeContext.tsx';
import Input from '../input/Input.tsx';
import {
  ButtonSwitcher,
  Information,
  InputsContainer,
  LoginContainer,
  LoginEmail,
  MultisetContainer,
  TabsSwitcher,
} from './Login.styles.ts';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import { style } from 'framer-motion/client';

/*
endpoint LOGIN
email: string;
senha: string;
*/

const Login = () => {
  const { themeMode } = useContextTheme();
  const email = useForm('email');
  const password = useForm('password_login');
  const [displayForm, setDisplayForm] = useState<'login' | 'register'>('login');

  const handleDisplayLoginForm = () => {
    setDisplayForm('login');
  };

  const handleDisplayRegisterForm = () => {
    setDisplayForm('register');
  };

	// Componentizar esse form e deixar essa mudança de cores nos botões mais dinâmico e robusto

  return (
    <LoginContainer>
      <img
        src={themeMode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
        alt="cnm_logohorz"
        style={{ height: 'var(--size-3md)' }}
      />
      <LoginEmail>
        <Information>Acesse sua Conta ou Cadastre-se</Information>
        <MultisetContainer>
          <TabsSwitcher>
            <ButtonSwitcher
              onClick={handleDisplayLoginForm}
              style={
                displayForm === 'register'
                  ? { backgroundColor: '#606060' }
                  : { backgroundColor: '#171717' }
              }
            >
              Login
            </ButtonSwitcher>
            <ButtonSwitcher
              onClick={handleDisplayRegisterForm}
              style={
                displayForm === 'login'
                  ? { backgroundColor: '#606060' }
                  : { backgroundColor: '#171717' }
              }
            >
              Cadastre-se
            </ButtonSwitcher>
          </TabsSwitcher>
          <InputsContainer>
            <Input
              id="email"
              type="text"
              placeholder="Digite seu email"
              {...email}
            />
            <Input
              id="password"
              type="password"
              placeholder="No mínimo 8 digitos"
              {...password}
            />
          </InputsContainer>
        </MultisetContainer>
      </LoginEmail>
    </LoginContainer>
  );
};

export default Login;
