/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import styled from '@emotion/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '@phosphor-icons/react';

import 'react-datepicker/dist/react-datepicker.css';

// Sobrescreve estilos do calendário popup
const StyledDatePickerWrapper = styled.div`
	.react-datepicker {
		border-radius: 12px;
		border: 1px solid ${({ theme }) => theme.colors.inputs.stroke};
		font-family: inherit;
		color: ${({ theme }) => theme.colors.texts.primary};
		background: ${({ theme }) => theme.colors.inputs.background};
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	}

	.react-datepicker__header {
		background: ${({ theme }) => theme.colors.inputs.background};
		border-bottom: none;
		padding-top: 8px;
		border-radius: 12px 12px 0 0;
	}

	.react-datepicker__day {
		color: ${({ theme }) => theme.colors.texts.primary};
	}

	.react-datepicker__day-name {
		color: ${({ theme }) => theme.colors.texts.secondary};
	}

	.react-datepicker__day--selected,
	.react-datepicker__day--keyboard-selected {
		background: ${({ theme }) => theme.colors.texts.highlight};
		color: ${({ theme }) => theme.colors.backgrounds.primary};
	}

	.react-datepicker__day:hover {
		background: ${({ theme }) => theme.colors.texts.highlight}48;
	}

	.react-datepicker__current-month {
		color: ${({ theme }) => theme.colors.texts.primary};
		font-weight: 600;
		margin-bottom: 4px;
	}
`;

type Mode = 'day' | 'month' | 'year';

type DateInputProps = {
	value: Date | undefined;
	placeholderText?: string;
	setValue: (value: Date | null) => void;
	error?: string;
	mode?: Mode;
};

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 48px;
	width: 100%;
	border-radius: 12px;
	border: 1.4px solid ${({ theme }) => theme.colors.inputs.placeholder};
	margin-bottom: 8px;
	padding: 0 12px;
	cursor: pointer;
	background: ${({ theme }) => theme.colors.inputs.background};
`;

const StyledInput = styled.input`
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
	background: transparent;
	font-size: 16px;
	border-radius: 12px;
	padding-left: 12px;
	text-align: start;
	cursor: pointer;

	color: ${({ theme }) => theme.colors.texts.primary};
	background: ${({ theme }) => theme.colors.inputs.background};

	&::placeholder {
		font-size: var(--size-sm);
	}
`;

const CustomInput = forwardRef<HTMLInputElement, any>(
	({ value, onClick, placeholder, ...props }, ref) => (
		<InputWrapper onClick={onClick}>
			<CalendarIcon size={18} strokeWidth={1.6} />
			<StyledInput
				ref={ref}
				value={value}
				placeholder={placeholder}
				readOnly
				{...props}
			/>
		</InputWrapper>
	),
);

const DateInput = ({
	value,
	setValue,
	placeholderText,
	mode = 'day',
}: DateInputProps) => {
	let dateFormat = 'dd/MM/yyyy';
	let placeholder = 'dd/mm/aaaa';
	let pickerProps: Record<string, any> = {};

	if (mode === 'month') {
		dateFormat = 'MM/yyyy';
		placeholder = 'mm/aaaa';
		pickerProps.showMonthYearPicker = true;
	}

	if (mode === 'year') {
		dateFormat = 'yyyy';
		placeholder = 'aaaa';
		pickerProps.showYearPicker = true;
	}

	return (
		<StyledDatePickerWrapper>
			<DatePicker
				selected={value}
				onChange={setValue}
				dateFormat={dateFormat}
				placeholderText={placeholderText ?? placeholder}
				customInput={<CustomInput />}
				{...pickerProps}
			/>
		</StyledDatePickerWrapper>
	);
};

export default DateInput;
