import React from 'react';
import style from './styles/DateInput.module.css';
import { useContextTheme } from '../../context/ThemeContext';
import { DateInputContainer, DateInputField } from './DateInput.styles';

export type typeDate = {
	day: string;
	month: string;
	year: string;
};

function isEmpty(value: typeDate) {
	return value.day.length > 0 && value.month.length > 0 && value.year.length > 0
		? true
		: false;
}

function errorConfig(error: string, themeMode: string) {
	return <span style={{ color: `var(--error-${themeMode})` }}>{error}</span>;
}

const DateInput = () => {
	const { themeMode } = useContextTheme();
	const [dateOfBirth, setDateOfBirth] = React.useState<typeDate>({
		day: '',
		month: '',
		year: '',
	});

	return (
		<div>
			<DateInputContainer onBlur={() => isEmpty(dateOfBirth)}>
				<DateInputField
					type='text'
					id='day'
					value={dateOfBirth.day}
					placeholder='00'
					onChange={({ target }) =>
						setDateOfBirth({
							day: target.value,
							month: dateOfBirth.month,
							year: dateOfBirth.year,
						})
					}
				/>
				<span>/</span>
				<DateInputField
					type='text'
					id='month'
					value={dateOfBirth.month}
					placeholder='00'
					onChange={({ target }) =>
						setDateOfBirth({ day: dateOfBirth.day, month: target.value, year: dateOfBirth.year })
					}
				/>
				<span>/</span>
				<DateInputField
					type='text'
					id='year'
					value={dateOfBirth.year}
					placeholder='0000'
					onChange={({ target }) =>
						setDateOfBirth({ day: dateOfBirth.day, month: dateOfBirth.month, year: target.value })
					}
				/>
			</DateInputContainer>
			{/*error && error?.length !== 0 ? errorConfig(error, themeMode) : null*/}
		</div>
	);
};

export default DateInput;
