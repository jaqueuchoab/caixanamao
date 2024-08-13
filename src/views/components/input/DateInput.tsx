import React from 'react';
import style from './styles/DateInput.module.css';

type DateInput = {
  value: Date;
  setValue: React.Dispatch<React.SetStateAction<Date>>;
};

export type Date = {
  day: string;
  month: string;
  year: string;
};

const DateInput = ({value, setValue} : DateInput) => {
  return (
    <div className={style.dateInput}>
      <input type="text" id="day" value={value.day} placeholder='00'/>
      <span>/</span>
      <input type="text" id="month" value={value.month} placeholder='00'/>
      <span>/</span>
      <input type="text" id="year" value={value.year} placeholder='0000'/>
    </div>
  );
};

export default DateInput;
