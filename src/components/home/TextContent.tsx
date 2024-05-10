import React from 'react';
import style from './styles/TextContent.module.css';

// Tipo que define as propriedades que TextContent pode receber
type Content = {
  titulo: string;
  texto: string;
};

function TextContent({ titulo, texto }: Content) {
  // h3 e o p receberão seus dados por meio de props
  return (
    <div className={style.textContent}>
      <h3 className={style.h3}>{titulo}</h3>
      <p className={style.p}>{texto}</p>
    </div>
  );
}

export default TextContent;
