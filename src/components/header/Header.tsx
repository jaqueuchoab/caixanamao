import React from 'react';
// Importando style css
import style from './Header.module.css';
// Importando imagens
import cnm_logo_light from '../../assets/logos/light-theme-assets/cnm-logo-light.svg';
import icon_mode_light from '../../assets/icons/icon-mode-light.svg';
import icon_mode_dark from '../../assets/icons/icon-mode-dark.svg';
import icon_hamburguer_light from '../../assets/icons/icon-hamburguer-light.svg';
// Importando ferramentas para configuração de rotas
import { Link } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

const Header = () => {
  const { mode, setMode } = useMode();

  return (
    <header className={style.header}>
      <Link to="/">
        <img
          src={cnm_logo_light}
          alt="logo-mode-light"
          className={style.logoLight}
        />
      </Link>
      <nav className={style.nav}>
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          <img src={mode === 'light' ? icon_mode_light : icon_mode_dark} alt={`icon-mode-${mode}`} />
        </button>
        <button>
          <img src={icon_hamburguer_light} alt="icon-menu-hamburguer-light" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
