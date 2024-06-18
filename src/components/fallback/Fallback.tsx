import React from 'react';
import { LinkBreak } from 'phosphor-react';
import style from './Fallback.module.css';
import { Link } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

/*
1- configurar o svg, o fill da path FEITO
2- configurar o style padrao, disposiçao dos elemetos na pag
3- remover cabeçalho e footer (posso alterar o tamanho da div para tomar toda a tela e ou mudar a rota da pag quando o fallback ocorrer)
*/

type FallbackProps = {
  errorMessage: string;
};

const Fallback = ({ errorMessage }: FallbackProps) => {
  const { mode } = useMode();

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
