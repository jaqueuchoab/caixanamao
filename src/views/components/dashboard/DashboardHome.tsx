import style from './Dashboard.module.css';
import { useMode } from '../../context/ModeContext';
import { List, House, Notepad, Plus, FileText, ChartBar } from '@phosphor-icons/react';


const DashboardHome = () => {
  const { mode } = useMode();

  return (
    <div className={style.dashboardContainer} id={style[mode]}>
      <header className={style.header}>
        <div className={style.profile}>
          <div className={style.photo}></div>
          <div className={style.profileInfos}>
            <h3 className={style.userName}  style={{color: `var(--primary-${mode}-text)`}}>Nome do usuário</h3>
            <p className={style.userOcupation} style={{color: `var(--${mode}-highlight)`}}>Cargo</p>
          </div>
        </div>
        <List size={32} color={`var(--icon-${mode}-default)`} />
      </header>

      {/*Rotas aqui no meio :) */}

      <footer className={style.bottomMenu}>
        <button className={style.home}><House size={32} /></button>
        <button className={style.registers}><Notepad size={32} /></button>
        <button className={style.newRegisters}><Plus size={32} /></button>
        <button className={style.reports}><FileText size={32} /></button>
        <button className={style.analysis}><ChartBar size={32} /></button>
      </footer>
    </div>
  );
};

// adaptar as cores para o modo dark
export default DashboardHome;
