import React from 'react';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';
import style from './styles/LoginPassword.module.css';
import Button from '../button/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

const LoginPassword = () => {
  const password = useForm('password_login');
  const navigate = useNavigate();
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
          <span className={style.emailPrev}>
            {localStorage.getItem('email')}
          </span>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 8 digitos"
            {...password}
          />
        </div>
      </div>
      <div className={style.buttons}>
        {password.error === null && password.value.length > 0 ? (
          <Button onClick={() => {navigate('/signup', {replace: true})}}>Entrar</Button>
        ) : (
          <Button disabledButton={true}>Entrar</Button>
        )}
        <Link to={''}>Esqueci minha senha</Link>
      </div>
    </section>
  );
};

export default LoginPassword;
