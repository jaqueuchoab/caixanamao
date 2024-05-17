import React from 'react';
// Importando style css
import style from './Footer.module.css';
import logo_vert_light from '../../assets/logos/light-theme-assets/cnm-logovert-light.svg'
// Importando ferramentas para configuração de rotas
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={style.contentFooter}>
        <img src={logo_vert_light} alt='logo-mode-light' className={style.logoVertLight}/>
        <div className={style.linkActions}>
          <Link to="/login-registration"><p>Login / Cadastro</p></Link>
          <Link to="/benefits"><p>Vantagens</p></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
