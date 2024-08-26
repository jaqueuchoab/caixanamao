import React from 'react';
import style from './styles/DateInput.module.css';
import { useMode } from '../../context/ModeContext';

type DateInput = {
  value: typeDate;
  setValue: React.Dispatch<React.SetStateAction<typeDate>>;
  error: string;
};

export type typeDate = {
  day: string;
  month: string;
  year: string;
};

function errorConfig(error: string, mode: string) {
  return <span style={{ color: `var(--error-${mode})` }}>{error}</span>;
}

const DateInput = ({ value, setValue, error }: DateInput) => {
  const {mode} = useMode();
  
  return (
    <div>
      <div className={style.dateInput}>
        <input
          type="text"
          id="day"
          value={value.day}
          placeholder="00"
          onChange={({ target }) =>
            setValue({
              day: target.value,
              month: value.month,
              year: value.year,
            })
          }
        />
        <span>/</span>
        <input
          type="text"
          id="month"
          value={value.month}
          placeholder="00"
          onChange={({ target }) =>
            setValue({ day: value.day, month: target.value, year: value.year })
          }
        />
        <span>/</span>
        <input
          type="text"
          id="year"
          value={value.year}
          placeholder="0000"
          onChange={({ target }) =>
            setValue({ day: value.day, month: value.month, year: target.value })
          }
        />
      </div>
      {error && error?.length !== 0 ? errorConfig(error, mode) : null}
    </div>
  );
};

export default DateInput;
