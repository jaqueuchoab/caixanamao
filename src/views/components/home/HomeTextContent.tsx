import style from './styles/HomeTextContent.module.css';
import { useMode } from '../../context/ModeContext';

// Tipo que define as propriedades que TextContent pode receber
type Content = {
  titulo: string;
  texto: string;
};

function TextContent({ titulo, texto }: Content) {
  const { mode } = useMode();

  return (
    <div className={style.textContent} id={style[mode]}>
      <h3 className={style.h3}>{titulo}</h3>
      <p className={style.p}>{texto}</p>
    </div>
  );
}

export default TextContent;
