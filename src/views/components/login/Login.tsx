import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import { useContextTheme } from '../../context/ThemeContext.tsx';
import Input from '../input/Input.tsx';
import {
  ButtonSwitcher,
  Information,
  LoginContainer,
  LoginEmail,
  MultisetContainer,
  TabsSwitcher,
} from './Login.styles.ts';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

/*
endpoint LOGIN
email: string;
senha: string;
*/

const Login = () => {
  const { themeMode } = useContextTheme();
  const navigate = useNavigate();
  const email = useForm('email');
  const password = useForm('password_login');

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
            <ButtonSwitcher>Login</ButtonSwitcher>
            <ButtonSwitcher>Cadastre-se</ButtonSwitcher>
          </TabsSwitcher>
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
        </MultisetContainer>
      </LoginEmail>
    </LoginContainer>
  );
};

export default Login;
