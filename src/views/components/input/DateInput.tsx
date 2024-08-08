import React from 'react';

type DateInput = {
  value: Date;
  setValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export type Date = {
  day: string;
  month: string;
  year: string;
};

const DateInput = ({value, setValue} : DateInput) => {
  return (
    <div>
      <input type="text" id="day" value={value.day} />
      <span>/</span>
      <input type="text" id="month" value={value.month} />
      <span>/</span>
      <input type="text" id="year" value={value.year} />
    </div>
  );
};

export default DateInput;
