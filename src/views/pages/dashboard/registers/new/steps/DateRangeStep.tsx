import DateInput from '@components/ui/input/DateInput';
import { InputContainer } from '../styles';
import { useEffect } from 'react';
import { differenceInDays } from 'date-fns';
import {
	Controller,
	FieldValues,
	UseFormSetValue,
	Path,
	useFormContext,
} from 'react-hook-form';

type DateRangeStepProps<TFormValues extends FieldValues> = {
	startField?: Path<TFormValues>;
	endField?: Path<TFormValues>;
	resource?: 'registers' | 'reports';
	onDateRangeChange?: (
		start: Date,
		end: Date,
		diffInDays: number,
		setValue: UseFormSetValue<TFormValues>,
	) => void;
};

export function DateRangeStep<TFormValues extends FieldValues>({
	startField = 'data' as Path<TFormValues>,
	endField = 'data_final' as Path<TFormValues>,
	resource = 'registers',
	onDateRangeChange,
}: DateRangeStepProps<TFormValues>) {
	const { control, watch, setValue } = useFormContext<TFormValues>();

	const startDate = watch(startField);
	const endDate = watch(endField);

	const diffInDays =
		startDate && endDate ? differenceInDays(endDate, startDate) + 1 : 0;

	useEffect(() => {
		if (startDate && endDate && diffInDays > 0) {
			onDateRangeChange?.(startDate, endDate, diffInDays, setValue);
		}
	}, [startDate, endDate, diffInDays, onDateRangeChange, setValue]);

	return (
		<>
			<InputContainer>
				<label>Data de Início:</label>
				<Controller
					control={control}
					name={startField}
					render={({ field }) => (
						<DateInput
							mode='day'
							value={field.value}
							setValue={field.onChange}
						/>
					)}
				/>
			</InputContainer>

			<InputContainer>
				<label>Data de Fim:</label>
				<Controller
					control={control}
					name={endField}
					render={({ field }) => (
						<DateInput
							mode='day'
							value={field.value}
							setValue={field.onChange}
						/>
					)}
				/>
			</InputContainer>

			{resource === 'registers' && diffInDays > 0 && (
				<p className='font-semibold'>
					Você preencherá: {diffInDays} registro(s)
				</p>
			)}
		</>
	);
}
