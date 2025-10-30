import {
	CashRegisterIcon,
	CreditCardIcon,
	MoneyIcon,
	PixLogoIcon,
	ReceiptIcon,
	ReceiptXIcon,
} from '@phosphor-icons/react';
import { RegisterItem } from '../RegisterItem';
import { Container, HeadText, Total, Values } from '../RegisterCard/styles';
import { Controller, useFormContext } from 'react-hook-form';
import { Schema } from '../../new';
import { calculateRegisterTotal } from '@/utils/calculate-register-total';
import { differenceInDays } from 'date-fns';

interface EditableRegisterCardProps {
	id: number;
	showTotal?: boolean;
}

export function EditableRegisterCard({
	id,
	showTotal = true,
}: EditableRegisterCardProps) {
	const { watch, control } = useFormContext<Schema>();
	const register = watch(`registers.${id}`);

	if (!register) {
		return null;
	}

	const total = calculateRegisterTotal(register);
	const startDate = watch('startDate');
	const endDate = watch('endDate');
	const diffInDays = differenceInDays(endDate, startDate) + 1;

	return (
		<Container>
			<HeadText>
				<div className="registerCard__titleContainer">
					<span className="registerCard__title">
						{register.date.toLocaleDateString('PT-BR')}
					</span>
				</div>
				<div className="registerCard__dateInterval">
					{id + 1}/{diffInDays} cartões
				</div>
			</HeadText>

			<Values>
				<Controller
					control={control}
					name={`registers.${id}.values.initial`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-initial`}
							editable
							icon={CashRegisterIcon}
							name="Inicial"
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.values.money`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-money`}
							editable
							icon={MoneyIcon}
							name="Espécie"
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.values.creditCard`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-creditCard`}
							editable
							icon={CreditCardIcon}
							name="Cartão"
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.values.pix`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-pix`}
							editable
							icon={PixLogoIcon}
							name="Pix"
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.values.expenses`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-expenses`}
							editable
							icon={ReceiptXIcon}
							name="Despesas"
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
			</Values>

			{showTotal && (
				<Total
					data-category={
						total > 0 ? 'profit' : total < 0 ? 'loss' : ''
					}
				>
					<RegisterItem
						id={`${id}-total`}
						name="Total"
						icon={ReceiptIcon}
						value={total || 0}
						style={{ border: 'none', fontWeight: 600 }}
					/>
				</Total>
			)}
		</Container>
	);
}
