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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import { style } from 'framer-motion/client';
import FormMultiset from '../formMultiset/FormMultiset.tsx';

/*
endpoint LOGIN
email: string;
senha: string;
*/

const Login = () => {
  const { themeMode } = useContextTheme();
  const email = useForm('email');
  const password = useForm('password_login');
  const telefone = useForm('telefone');
  const cidade = useForm('cidade');
  const location = useLocation();
  const currentPath = location.pathname;

  const isLogin = currentPath === '/login';

  return (
    <LoginContainer>
      <img
        src={themeMode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
        alt="cnm_logohorz"
        style={{ height: 'var(--size-3md)' }}
      />
      <LoginEmail>
        <Information>Acesse sua Conta ou Cadastre-se</Information>
        <FormMultiset>
          {isLogin ? (
            <>
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
            </>
          ) : (
            <>
              <Input
                id="telefone"
                type="text"
                placeholder="Digite seu telefone"
                {...telefone}
              />
              <Input
                id="cidade"
                type="cidade"
                placeholder="Digite sua cidade"
                {...cidade}
              />
            </>
          )}
        </FormMultiset>
      </LoginEmail>
    </LoginContainer>
  );
};

export default Login;
