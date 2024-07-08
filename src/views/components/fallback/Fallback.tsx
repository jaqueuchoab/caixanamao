import React from 'react';
import { LinkBreak } from 'phosphor-react';
import style from './Fallback.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

const Fallback = () => {
  const { mode } = useMode();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const errorMessage = params.get('error') || 'Unknown error';

  /*teste*/

  return (
    <div className={style.fallback} id={style[mode]}>
      <LinkBreak
        color={
          mode === 'light'
            ? 'var(--color-neutral-600)'
            : 'var(--color-neutral-300)'
        }
        size={120}
      />
      <p className={style.p}>Ops... Página não encontrada.</p>
      <span className={style.span}>
        <p>{errorMessage}</p>
      </span>
      <Link
        to={'/'}
        style={
          mode === 'light'
            ? {
                color: 'var(--color-green-900)',
                fontSize: 'var(--size-2xs)',
                textDecoration: 'underline',
              }
            : {
                color: 'var(--color-green-300)',
                fontSize: 'var(--size-2xs)',
                textDecoration: 'underline',
              }
        }
      >
        Voltar para a página anterior
      </Link>
    </div>
  );
};

export default Fallback;
