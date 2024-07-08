import React from 'react';
import style from './styles/LoginCadastro.module.css';
import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import googleLogo from '../../assets/google_g_logo.svg';
import { useMode } from '../../context/ModeContext';
import Input from '../input/Input';
import Button from '../button/Button';
import useForm from '../../hooks/useForm';

const LoginCadastro = () => {
  const { mode } = useMode();
  const email = useForm('email');

  return (
    <div className={style.loginCadastro}>
      <img
        src={mode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
        alt="cnm_logohorz"
        style={{ height: 'var(--size-3md)' }}
      />
      <section className={style.mainContent} id={style[mode]}>
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
            <span style={{color: 'var(--placeholder)'}}>ou</span>
            <span className={style.line}></span>
          </div>
          <Input id='email' type='text' placeholder='Digite seu melhor email' {...email}/>
        </div>
      </section>
      <Button>Autenticar</Button>
    </div>
  );
};

export default LoginCadastro;
