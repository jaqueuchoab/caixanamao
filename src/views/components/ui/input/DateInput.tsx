import React from 'react';
import style from './styles/DateInput.module.css';
import { useContextTheme } from '@context/ThemeContext';

export type typeDate = {
	day: string;
	month: string;
	year: string;
};

type DateInputProps = {
	value: typeDate;
	setValue: (value: typeDate) => void;
	dateType?: 'day' | 'month' | 'year';
	error?: string;
};

function isEmpty(value: typeDate, dateType: 'day' | 'month' | 'year' = 'day') {
	if (dateType === 'day') {
		return value.day.length > 0 && value.month.length > 0 && value.year.length > 0;
	}
	if (dateType === 'month') {
		return value.month.length > 0 && value.year.length > 0;
	}
	return value.year.length > 0;
}

function errorConfig(error: string, themeMode: string) {
	return <span style={{ color: `var(--error-${themeMode})` }}>{error}</span>;
}

const DateInput = ({ value, setValue, dateType = 'day' }: DateInputProps) => {
	const { themeMode } = useContextTheme();

	return (
		<div>
			<div
				className={style.dateInput}
				id={style[themeMode]}
				onBlur={() => isEmpty(value, dateType)}
			>
				{dateType === 'day' && (
					<>
						<input
							type='text'
							id='day'
							value={value.day}
							placeholder='00'
							onChange={({ target }) =>
								setValue({
									day: target.value,
									month: value.month,
									year: value.year,
								})
							}
						/>
						<span>/</span>
					</>
				)}
				{(dateType === 'day' || dateType === 'month') && (
					<>
						<input
							type='text'
							id='month'
							value={value.month}
							placeholder='00'
							onChange={({ target }) =>
								setValue({
									day: value.day,
									month: target.value,
									year: value.year,
								})
							}
						/>
						<span>/</span>
					</>
				)}
				<input
					type='text'
					id='year'
					value={value.year}
					placeholder='0000'
					onChange={({ target }) =>
						setValue({
							day: value.day,
							month: value.month,
							year: target.value,
						})
					}
				/>
			</div>
			{/*error && error?.length !== 0 ? errorConfig(error, themeMode) : null*/}
		</div>
	);
};

export default DateInput;
