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
        <Link to="/login-cadastro"><p className={style.linkActions}>Login / Cadastro</p></Link>
        <Link to="/vantagens"><p className={style.linkActions}>Vantagens</p></Link>
      </div>
    </footer>
  )
}

export default Footer;
