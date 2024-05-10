// Importando style css
import style from './Header.module.css';
// Importando imagens
import logoLight from '../../assets/logos/light-theme-assets/cnm-logo-light.svg'; 
import iconModeLight from '../../assets/icons/icon-mode-light.svg';
import iconMenuHamburguer from '../../assets/icons/icon-hamburguer-light.svg';
// Importando ferramentas para configuração de rotas
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/"><img src={logoLight} alt='logo-mode-light' className={style.logoLight}/></Link>
      <nav className={style.nav}>
        <button><img src={iconModeLight} alt='icon-mode-light'/></button>
        <button><img src={iconMenuHamburguer} alt='icon-menu-hamburguer-light'/></button>
      </nav>
    </header>
  );
}

export default Header;
