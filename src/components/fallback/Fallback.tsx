import React from 'react';
import { LinkBreak } from 'phosphor-react';
import style from './Fallback.module.css';

/*
1- configurar o svg, o fill da path FEITO
2- configurar o style padrao, disposiçao dos elemetos na pag
3- remover cabeçalho e footer (posso alterar o tamanho da div para tomar toda a tela e ou mudar a rota da pag quando o fallback ocorrer)
*/

type FallbackProps = {
  mode: string;
  errorMessage: string;
};


const Fallback = ({ mode, errorMessage }: FallbackProps) => {
  return (
    <div className={style.fallback}>
      <LinkBreak color='#484848' mirrored={true} size={72}/>
      <p
        style={
          mode === 'light'
            ? { color: 'var(--color-bg-950)' }
            : { color: 'var(--color-bg-100)' }
        }
      >
        Ops... Página não encontrada.
      </p>
      <span>
        <p>{errorMessage}</p>
      </span>
      <button>Voltar para a página anterior</button>
    </div>
  );
};

export default Fallback;
