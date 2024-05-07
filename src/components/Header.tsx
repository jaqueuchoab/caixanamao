import headerStyle from '../styles/Header.module.css';
import logoLight from '../assets/logos/light-theme-assets/cnm-logo-light.svg'; 
import iconModeLight from '../assets/icons/icon-mode-light.svg';
import iconMenuHamburguer from '../assets/icons/icon-hamburguer-light.svgicon-mode-light.svg';

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <img src={logoLight} alt='logo-mode-light' className={headerStyle.logoLight}/>
      <nav className={headerStyle.nav}>
        <img src={iconModeLight} alt='icon-mode-light'/>
        <img src={iconMenuHamburguer} alt='icon-menu-hamburguer-light'/>
      </nav>
    </header>
  );
}

export default Header;
