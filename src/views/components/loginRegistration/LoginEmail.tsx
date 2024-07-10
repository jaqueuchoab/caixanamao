import React from 'react';
import style from './styles/LoginEmail.module.css';
import googleLogo from '../../assets/google_g_logo.svg';
import { useMode } from '../../context/ModeContext';
import Input from '../input/Input';
import Button from '../button/Button';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

const LoginEmail = () => {
  const { mode } = useMode();
  const email = useForm('email');

  return (
    <section className={style.mainContent} id={style[mode]}>
      <div>
        <h3>Identificação por email</h3>
        <p>
          Entre com sua conta Google ou digite seu email e faremos a
          autenticação:
        </p>
        <div className={style.inputs}>
          <button>
            <img src={googleLogo} alt="Google logo" />
            Entrar com o Google
          </button>
          <div className={style.divisorInputs}>
            <span className={style.line}></span>
            <span style={{ color: 'var(--placeholder)' }}>ou</span>
            <span className={style.line}></span>
          </div>
          <Input
            id="email"
            type="text"
            placeholder="Digite seu melhor email"
            {...email}
          />
        </div>
      </div>
      <Link style={{ width: '100%' }} to={'password'}>
        {email.error === null && email.value.length > 0 ? (
          <Button onClick={() => localStorage.setItem('email', email.value)}>
            Autenticar
          </Button>
        ) : (
          <Button disabledButton={true}>Autenticar</Button>
        )}
      </Link>
    </section>
  );
};

export default LoginEmail;
