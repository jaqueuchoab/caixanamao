import { XIcon } from '@phosphor-icons/react';
import {
	Container,
	FilterRadioInputs,
	FilterDateInputs,
	PopupContent,
	PopupActions,
	PopupEmpty,
} from './RegisterFilterPopup.styles';
import Radio from '@components/ui/input/Radio';
import { Dispatch, SetStateAction, useEffect } from 'react';
import DateInput from '@components/ui/input/DateInput';
import { RegisterFilter } from 'src/models/registers/register-filter';
import { filterTypeMap } from '../../Registers';
import { Button } from '@components/ui/button/Button';
import { PopupTitle } from '../RegisterOrderPopup/RegisterOrderPopup.styles';

interface RegisterFilterPopupProps {
	filter: RegisterFilter;
	onChangeFilter: Dispatch<SetStateAction<RegisterFilter>>;
	onClose: () => void;
}

const radioOptions = [
	{ label: 'Intervalo', value: 'interval' },
	{ label: 'Dia', value: 'day' },
	{ label: 'Mês', value: 'month' },
	{ label: 'Ano', value: 'year' },
];

export function RegisterFilterPopup({
	filter,
	onChangeFilter,
	onClose,
}: RegisterFilterPopupProps) {
	function handleClearFilter() {
		onChangeFilter(() => ({
			type: undefined,
			date: {
				start: { day: '', month: '', year: '' },
				end: { day: '', month: '', year: '' },
			},
		}));
	}

	useEffect(() => console.log(filter), [filter]);

	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3, ease: 'easeOut', type: 'tween' }}
		>
			<PopupTitle>
				<h3>Filtrar por</h3>
				<XIcon
					weight='bold'
					onClick={onClose}
					size={20}
					style={{ cursor: 'pointer' }}
				/>
			</PopupTitle>

			<PopupContent>
				<FilterRadioInputs>
					<Radio
						options={radioOptions.map((opt) => opt.label)}
						value={
							radioOptions.find((opt) => opt.value === filter.type)?.label || ''
						}
						setValue={(selectedLabel) => {
							const selectedValue = radioOptions.find(
								(opt) => opt.label === selectedLabel
							)?.value as RegisterFilter['type'] | undefined;
							if (selectedValue) {
								onChangeFilter((prev) => ({
									...prev,
									type: selectedValue,
								}));
							}
						}}
					/>
				</FilterRadioInputs>

				{filter.type ? (
					<FilterDateInputs>
						{filter.type === 'interval' ? (
							<>
								<label>Data inicial:</label>
								<DateInput
									dateType='day'
									value={filter.date?.start || { day: '', month: '', year: '' }}
									setValue={(newStartDate) =>
										onChangeFilter((prev) => ({
											...prev,
											date: {
												...prev.date,
												start: newStartDate,
											},
										}))
									}
								/>
								<label>Data final:</label>
								<DateInput
									dateType='day'
									value={filter.date?.end || { day: '', month: '', year: '' }}
									setValue={(newEndDate) =>
										onChangeFilter((prev) => ({
											...prev,
											date: {
												...prev.date,
												end: newEndDate,
											},
										}))
									}
								/>
							</>
						) : (
							<>
								<label>{filterTypeMap[filter.type]}:</label>
								<DateInput
									dateType={filter.type}
									value={filter.date?.start || { day: '', month: '', year: '' }}
									setValue={(newStartDate) =>
										onChangeFilter((prev) => ({
											...prev,
											date: {
												...prev.date,
												start: newStartDate,
											},
										}))
									}
								/>
							</>
						)}
					</FilterDateInputs>
				) : (
					<PopupEmpty>Selecione um filtro</PopupEmpty>
				)}
			</PopupContent>

			<PopupActions>
				{filter.type && (
					<Button
						text_align='center'
						fill_width
						variant='neutral'
						onClick={handleClearFilter}
					>
						Limpar filtros
					</Button>
				)}
				{filter.type && (
					<Button text_align='center' fill_width variant='primary'>
						Filtrar
					</Button>
				)}
			</PopupActions>
		</Container>
	);
}
