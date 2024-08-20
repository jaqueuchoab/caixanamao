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

const DateInput = ({ value, setValue }: DateInput) => {
  console.log(value);

  return (
    <div className={style.dateInput}>
      <input
        type="text"
        id="day"
        value={value.day}
        placeholder="00"
        onChange={({ target }) => setValue({day: target.value, month: value.month, year: value.year})}
      />
      <span>/</span>
      <input
        type="text"
        id="month"
        value={value.month}
        placeholder="00"
        onChange={({ target }) =>setValue({day: value.day, month: target.value, year: value.year})}
      />
      <span>/</span>
      <input
        type="text"
        id="year"
        value={value.year}
        placeholder="0000"
        onChange={({ target }) => setValue({day: value.day, month: value.month, year: target.value})}
      />
    </div>
  );
};

export default DateInput;
