import React from 'react';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';
import style from './styles/LoginPassword.module.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

const LoginPassword = () => {
  const password = useForm('password_login');
  const { mode } = useMode();

  return (
    <section className={style.mainContent} id={style[mode]}>
      <div className={style.content}>
        <h3>Entrar</h3>
        <p>
          Ótimo, você já tem uma conta associada a esse email, para entrar
          autentique com sua senha.
        </p>

        <div className={style.inputs}>
          <span className={style.emailPrev}>{'jaqueline@gmail.com'}</span>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 8 digitos"
            {...password}
          />
        </div>
      </div>
      <div className={style.buttons}>
        <Button>Entrar</Button>
        <Link to={''}>Esqueci minha senha</Link>
      </div>
    </section>
  );
};

export default LoginPassword;
