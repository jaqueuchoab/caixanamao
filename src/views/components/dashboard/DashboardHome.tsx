import React from 'react';
import style from './Dashboard.module.css';
import { useMode } from '../../context/ModeContext';
import { List } from 'phosphor-react';

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
    </div>
  );
};

// adaptar as cores para o modo dark
export default DashboardHome;
