import DateInput from '@components/ui/input/DateInput';
import { InputContainer } from '../styles';
import { useEffect } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { Controller, useFormContext } from 'react-hook-form';
import { NewRegisterSchema } from '../../../../../../schemas/new-register-schema';

export function DateRangeStep() {
	const { control, watch, setValue } = useFormContext<NewRegisterSchema>();

	const startDate = watch('startDate');
	const endDate = watch('endDate');
	const diffInDays =
		startDate && endDate ? differenceInDays(endDate, startDate) + 1 : 0;

	// atualiza comprimento do array de registros conforme diferenca de datas em dias
	useEffect(() => {
		if (startDate && endDate && diffInDays > 0) {
			const registers = Array.from(
				{ length: diffInDays },
				(_, index) => ({
					date: addDays(startDate, index),
					values: {
						initial: 0,
						money: 0,
						creditCard: 0,
						pix: 0,
						expenses: 0,
					},
				}),
			);
			setValue('registers', registers);
		}
	}, [startDate, endDate, diffInDays, setValue]);

	return (
		<>
			<InputContainer>
				<label>Data de Início:</label>
				<Controller
					control={control}
					name='startDate'
					render={({ field: { onChange, value } }) => (
						<DateInput
							mode='day'
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
					name='endDate'
					render={({ field: { onChange, value } }) => (
						<DateInput
							mode='day'
							value={value}
							setValue={onChange}
						/>
					)}
				></Controller>
			</InputContainer>

			{diffInDays > 0 && (
				<p className='font-semibold'>
					Você preencherá: {diffInDays} registro(s)
				</p>
			)}
		</>
	);
}
