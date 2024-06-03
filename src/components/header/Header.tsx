import React from 'react';

// Importando style css
import style from './Header.module.css';

// Importando imagens
import cnm_logo_light from '../../assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logo_dark from '../../assets/logos/dark-theme-assets/cnm-logo-dark.svg';
import icon_mode_light from '../../assets/icons/icon-mode-light.svg';
import icon_mode_dark from '../../assets/icons/icon-mode-dark.svg';
import icon_hamburguer_light from '../../assets/icons/icon-hamburguer-light.svg';
import icon_hamburguer_dark from '../../assets/icons/icon-hamburguer-dark.svg';

// Importando ferramentas para configuração de rotas
import { Link } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

function setColorApp(mode: string) {
  const app: HTMLDivElement | null = document.querySelector('.app');
  const themeColor: HTMLMetaElement | null = document.querySelector(
    'meta[name="theme-color"]',
  );
  const themeColorApple: HTMLMetaElement | null = document.querySelector(
    'meta[name="apple-mobile-web-app-status-bar-style"]',
  );

  if (app && themeColor && themeColorApple) {
    mode === 'light'
      ? (app.style.background = 'var(--color-bg-100)') &&
        (themeColor.content = 'var(--color-bg-100)') &&
        (themeColorApple.content = 'var(--color-bg-100)')
      : (app.style.background = 'var(--color-bg-800)') &&
        (themeColor.content = 'var(--color-bg-800)') &&
        (themeColorApple.content = 'var(--color-bg-800)');
  } else {
    throw new Error('app não existe');
  }
}

const Header = () => {
  const { mode, setMode, localMode, setLocalMode } = useMode();

  React.useEffect(() => {
    console.log('effect ' + localMode + 'localStorage ' + localStorage.getItem('mode'));
    
    if (localMode){
      setLocalMode(mode)
      setColorApp(localMode)
    } else {
      setLocalMode(mode)
      setColorApp(mode)
    }
  }, [mode, localMode, setLocalMode]);

  return (
    <header className={style.header}>
      <Link to="/">
        <img
          src={mode === 'light' ? cnm_logo_light : cnm_logo_dark}
          alt={`logo-mode-${mode}`}
          className={style.logoHeader}
        />
      </Link>
      <nav className={style.nav}>
        <button
          onClick={() => {
            setMode(mode === 'light' ? 'dark' : 'light');
          }}
        >
          <img
            src={mode === 'light' ? icon_mode_light : icon_mode_dark}
            alt={`icon-mode-${mode}`}
          />
        </button>
        <button>
          <img
            src={
              mode === 'light' ? icon_hamburguer_light : icon_hamburguer_dark
            }
            alt="icon-menu-hamburguer-light"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
