import React, { ReactElement } from 'react';
import { InputProps } from '../input/Input.tsx';
import {
  ButtonSwitcher,
  InputsContainer,
  MultisetContainer,
  TabsSwitcher,
} from './FormMultiset.styles.tsx';
import { useLocation, useNavigate } from 'react-router-dom';

type FormMultisetProps = {
  children: ReactElement<InputProps> | ReactElement<InputProps>[];
};

const FormMultiset = ({ children }: FormMultisetProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const displayForm: 'login' | 'register' =
    location.pathname.includes("login") ? 'login' : 'register';

  const handleDisplayLoginForm = () => {
    navigate('/login');
  };

  const handleDisplayRegisterForm = () => {
    navigate('/register');
  };
  return (
    <MultisetContainer>
      <TabsSwitcher>
        <ButtonSwitcher
          onClick={handleDisplayLoginForm}
          active={displayForm === 'login'}
        >
          Login
        </ButtonSwitcher>
        <ButtonSwitcher
          onClick={handleDisplayRegisterForm}
          active={displayForm === 'register'}
        >
          Cadastre-se
        </ButtonSwitcher>
      </TabsSwitcher>
      <InputsContainer>
        {displayForm === 'login' &&
          React.Children.map(children, (childrenInput) => childrenInput)}
        {displayForm === 'register' &&
          React.Children.map(children, (childrenInput) => childrenInput)}
      </InputsContainer>
    </MultisetContainer>
  );
};

export default FormMultiset;
