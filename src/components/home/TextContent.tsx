import React from 'react';
import style from './TextContent.module.css';
import { useMode } from '../../context/ModeContext';

// Tipo que define as propriedades que TextContent pode receber
type Content = {
  titulo: string;
  texto: string;
};

function TextContent({ titulo, texto }: Content) {
  const { mode } = useMode();

  return (
    <div className={style.textContent}>
      <h3
        style={
          mode === 'light'
            ? { color: 'var(--color-bg-950)' }
            : { color: 'var(--color-bg-100)' }
        }
        className={style.h3}
      >
        {titulo}
      </h3>
      <p style={
          mode === 'light'
            ? { color: 'var(--color-bg-600)' }
            : { color: 'var(--color-bg-300)' }
        }className={style.p}>{texto}</p>
    </div>
  );
}

export default TextContent;
