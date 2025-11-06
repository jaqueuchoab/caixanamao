import { XIcon } from '@phosphor-icons/react';
import {
	Container,
	FilterRadioInputs,
	FilterDateInputs,
	PopupContent,
	PopupActions,
	PopupEmpty,
} from './styles';
import Radio from '@components/ui/input/Radio';
import { Dispatch, SetStateAction } from 'react';
import DateInput from '@components/ui/input/DateInput';
import {
	filterTypeMap,
	RegisterFilter,
} from '@/@types/register/register-filter';
import { Button } from '@components/ui/button/Button';
import { PopupTitle } from '../RegisterOrderPopup/styles';

interface RegisterFilterPopupProps {
	currentFilter: RegisterFilter;
	onChangeCurrentFilter: Dispatch<SetStateAction<RegisterFilter>>;
	onClose: () => void;
}

const radioOptions = [
	{ label: 'Intervalo', value: 'interval' },
	{ label: 'Dia', value: 'day' },
	{ label: 'Mês', value: 'month' },
	{ label: 'Ano', value: 'year' },
];

export function RegisterFilterPopup({
	currentFilter,
	onChangeCurrentFilter,
	onClose,
}: RegisterFilterPopupProps) {
	function handleClearFilter() {
		onChangeCurrentFilter(() => ({
			type: undefined,
			date: {
				start: { day: '', month: '', year: '' },
				end: { day: '', month: '', year: '' },
			},
		}));
	}

	function handleFilter() {
		onClose();
	}

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
							radioOptions.find(
								(opt) => opt.value === currentFilter.type,
							)?.label || ''
						}
						setValue={(selectedLabel) => {
							const selectedValue = radioOptions.find(
								(opt) => opt.label === selectedLabel,
							)?.value as RegisterFilter['type'] | undefined;
							if (selectedValue) {
								onChangeCurrentFilter((prev) => ({
									...prev,
									type: selectedValue,
								}));
							}
						}}
					/>
				</FilterRadioInputs>

				{currentFilter.type ? (
					<FilterDateInputs>
						{currentFilter.type === 'interval' ? (
							<>
								<label>Data inicial:</label>
								<DateInput
									dateType='day'
									value={
										currentFilter.date?.start || {
											day: '',
											month: '',
											year: '',
										}
									}
									setValue={(newStartDate) =>
										onChangeCurrentFilter((prev) => ({
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
									value={
										currentFilter.date?.end || {
											day: '',
											month: '',
											year: '',
										}
									}
									setValue={(newEndDate) =>
										onChangeCurrentFilter((prev) => ({
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
								<label>
									{filterTypeMap[currentFilter.type]}:
								</label>
								<DateInput
									dateType={currentFilter.type}
									value={
										currentFilter.date?.start || {
											day: '',
											month: '',
											year: '',
										}
									}
									setValue={(newStartDate) =>
										onChangeCurrentFilter((prev) => ({
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
				{currentFilter.type && (
					<Button
						text_align='center'
						fill_width
						variant='neutral'
						onClick={handleClearFilter}
					>
						Limpar filtros
					</Button>
				)}
				{currentFilter.type && (
					<Button
						onClick={handleFilter}
						text_align='center'
						fill_width={true}
						variant='primary'
					>
						Filtrar
					</Button>
				)}
			</PopupActions>
		</Container>
	);
}
