import DateInput from '@components/ui/input/DateInput';
import { InputContainer } from '../styles';
import { useEffect } from 'react';
import { useRegisterStepsContext } from '@/views/context/RegisterStepsContext';
import { differenceInDays } from 'date-fns';
import { Controller, useFormContext } from 'react-hook-form';
import { Schema } from '..';

// TODO: terminar de implementar seleção de range com react-day-picker
// TODO: estilizar DateInput para seguir padrão
export function DateRangeStep() {
	const { control, watch } = useFormContext<Schema>();
	const { handleSetDaysDiff } = useRegisterStepsContext();

	const startDate = watch('startDate');
	const endDate = watch('endDate');
	const diff =
		startDate && endDate ? differenceInDays(endDate, startDate) : -1;
	
	// monitora a diferença de dias
	useEffect(() => {
		const updateDiff = () => {
			handleSetDaysDiff(diff);
			console.log('daysDiff updated to:', diff);
		};

		updateDiff();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [diff]);

	return (
		<>
			<InputContainer>
				<label>Data de Início:</label>
				<Controller
					control={control}
					name="startDate"
					render={({ field: { onChange, value } }) => (
						<DateInput
							mode="day"
							value={value}
							setValue={onChange}
						/>
					)}
				></Controller>
			</InputContainer>

			<InputContainer>
				<label>Data de Fim:</label>
				<Controller
					control={control}
					name="endDate"
					render={({ field: { onChange, value } }) => (
						<DateInput
							mode="day"
							value={value}
							setValue={onChange}
						/>
					)}
				></Controller>
			</InputContainer>

			{diff !== null && (
				<p className="font-semibold">Diferença: {diff} dias</p>
			)}
		</>
	);
}
