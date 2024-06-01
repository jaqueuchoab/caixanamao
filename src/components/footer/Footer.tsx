import React from 'react';

// Importando style css
import style from './Footer.module.css';

//Importando imagens
import logo_vert_light from '../../assets/logos/light-theme-assets/cnm-logovert-light.svg'
import logo_vert_dark from '../../assets/logos/dark-theme-assets/cnm-logovert-dark.svg'

// Importando ferramentas para configuração de rotas
import { Link } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

const FooterLight: React.CSSProperties = {
  background: 'var(--color-bg-100)',
  color: 'var(--color-bg-600)'
}

const FooterDark: React.CSSProperties = {
  background: 'var(--color-bg-800)',
  color: 'var(--color-bg-300)'
}

const Footer = () => {
  const { mode } = useMode();

  return (
    <footer style={mode === 'light' ? FooterLight : FooterDark}>
      <div className={style.contentFooter}>
        <img src={mode === 'light' ? logo_vert_light : logo_vert_dark} alt={`logo-mode-${mode}`} className={style.logoVert}/>
        <div className={style.linkActions}>
          <Link to="/login-registration"><p>Login / Cadastro</p></Link>
          <Link to="/benefits"><p>Vantagens</p></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
