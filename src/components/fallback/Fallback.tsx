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
    <div
      className={style.fallback}
      style={
        mode === 'light'
          ? { backgroundColor: 'var(--color-bg-200)' }
          : { backgroundColor: 'var(--color-bg-800)' }
      }
    >
      <LinkBreak
        color={mode === 'light' ? 'var(--color-bg-600)' : 'var(--color-bg-300)'}
        size={120}
      />
      <p
        className={style.p}
        style={
          mode === 'light'
            ? { color: 'var(--color-bg-950)' }
            : { color: 'var(--color-bg-100)' }
        }
      >
        Ops... Página não encontrada.
      </p>
      <span
        className={style.span}
        style={{ backgroundColor: 'var(--color-bg-600)' }}
      >
        <p>{errorMessage}</p>
      </span>
      <Link
        to={'/'}
        style={
          mode === 'light'
            ? { color: 'var(--color-green-900)', fontSize: '16px' }
            : { color: 'var(--color-green-300)', fontSize: '16px' }
        }
      >
        Voltar para a página anterior
      </Link>
    </div>
  );
};

export default Fallback;
