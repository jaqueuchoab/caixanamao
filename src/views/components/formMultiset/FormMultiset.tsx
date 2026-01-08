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

  const displayForm: 'login' | 'signup' =
    location.pathname.includes("login") ? 'login' : 'signup';

  const handleDisplayLoginForm = () => {
    navigate('/login');
  };

  const handleDisplaySignupForm = () => {
    navigate('/signup');
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
          onClick={handleDisplaySignupForm}
          active={displayForm === 'signup'}
        >
          Cadastre-se
        </ButtonSwitcher>
      </TabsSwitcher>
      <InputsContainer>
        {displayForm === 'login' &&
          React.Children.map(children, (childrenInput) => childrenInput)}
        {displayForm === 'signup' &&
          React.Children.map(children, (childrenInput) => childrenInput)}
      </InputsContainer>
    </MultisetContainer>
  );
};

export default FormMultiset;
