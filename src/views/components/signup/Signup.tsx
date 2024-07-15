import React from 'react';
import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import { useMode } from '../../context/ModeContext';

const Signup = () => {
  const {mode} = useMode();
  return (
    <div>
      <img
        src={mode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
        alt="cnm_logohorz"
        style={{ height: 'var(--size-3md)' }}
      />
    </div>
  )
}

export default Signup;
