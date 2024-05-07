import React from 'react';
import logoLight from '../assets/logos/light-theme-assets/cnm-logo-light.png'; 
import iconModeLight from '../assets/icons/icon-mode-light.png';
import iconMenuHamburguer from '../assets/icons/icon-hamburguer-light.png';

const Header = () => {
  return (
    <header>
      <img src={logoLight} alt='logo-mode-light'/>
      <img src={iconModeLight} alt='icon-mode-light'/>
      <img src={iconMenuHamburguer} alt='icon-menu-hamburguer-light'/>
    </header>
  );
}

export default Header;
