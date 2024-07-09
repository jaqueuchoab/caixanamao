import React from 'react';
import { Route, Routes } from 'react-router-dom';
import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';
import { useMode } from '../../context/ModeContext';
import style from './styles/Login.module.css';

const Login = () => {
  const { mode } = useMode();
  return (
    <div className={style.loginRegistration} id={style[mode]}>
      <img
        src={mode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
        alt="cnm_logohorz"
        style={{ height: 'var(--size-3md)' }}
      />

      <Routes>
        <Route path="/" element={<LoginEmail />}></Route>
        <Route path="/password" element={<LoginPassword />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
