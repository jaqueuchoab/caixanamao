import React from 'react';
import { useContextTheme } from '../../context/ThemeContext';
import {
	DateInputContainer,
	DateInputField,
} from '../ui/input/DateInput.styles';

type DateInputProps = {
	value: string;
	onChange?: (value: string) => void;
};

// Tipo Date que precisamos
export type typeDate = {
	day: string;
	month: string;
	year: string;
};

// Verifica se o date está completo
function isComplete(date: typeDate) {
	return Boolean(date.day && date.month && date.year);
}

// Converte o date para o formato Date do JS
function parseDate({ day, month, year }: typeDate): string | null {
	if (!day || !month || !year) return null;
	const parsed = new Date(Number(year), Number(month) - 1, Number(day));

	const yyyy = parsed.getFullYear();
	const mm = String(parsed.getMonth() + 1).padStart(2, '0');
	const dd = String(parsed.getDate()).padStart(2, '0');

	const formattedDate = `${yyyy}-${mm}-${dd}`;

	// Verifica se a data é válida com getTime()
	return isNaN(parsed.getTime()) ? null : formattedDate;
}

function errorConfig(error: string, themeMode: string) {
	if (error !== '')
		return (
			<span style={{ color: `var(--error-${themeMode})` }}>{error}</span>
		);
}

const DateInput = ({ value, onChange }: DateInputProps) => {
	const { themeMode } = useContextTheme();
	const [dateOfBirth, setDateOfBirth] = React.useState<typeDate>({
		day: '',
		month: '',
		year: '',
	});
	const [erro, setErro] = React.useState('');

	React.useEffect(() => {
		if (isComplete(dateOfBirth) && onChange && dateOfBirth) {
			const finalDate = parseDate(dateOfBirth);
			if (finalDate) onChange(finalDate);
		}
	}, [dateOfBirth]);

	return (
		<div>
			<DateInputContainer>
				<DateInputField
					type='text'
					id='day'
					value={dateOfBirth.day}
					placeholder='00'
					onBlur={() => {
						dateOfBirth.day.length == 2
							? setErro('')
							: setErro('Preencha corretamente');
					}}
					onChange={({ target }) =>
						setDateOfBirth({ ...dateOfBirth, day: target.value })
					}
				/>
				<span>/</span>
				<DateInputField
					type='text'
					id='month'
					value={dateOfBirth.month}
					placeholder='00'
					onBlur={() => {
						dateOfBirth.month.length == 2
							? setErro('')
							: setErro('Preencha corretamente');
					}}
					onChange={({ target }) =>
						setDateOfBirth({ ...dateOfBirth, month: target.value })
					}
				/>
				<span>/</span>
				<DateInputField
					type='text'
					id='year'
					value={dateOfBirth.year}
					placeholder='0000'
					onBlur={() => {
						isComplete(dateOfBirth as typeDate) &&
						dateOfBirth.year.length == 4
							? setErro('')
							: setErro('Preencha corretamente');
					}}
					onChange={({ target }) =>
						setDateOfBirth({ ...dateOfBirth, year: target.value })
					}
				/>
			</DateInputContainer>

			{errorConfig(erro, themeMode)}
		</div>
	);
};

export default DateInput;
