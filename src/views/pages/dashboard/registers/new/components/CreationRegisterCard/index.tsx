import {
	CashRegisterIcon,
	CreditCardIcon,
	MoneyIcon,
	PixLogoIcon,
	ReceiptIcon,
	ReceiptXIcon,
} from '@phosphor-icons/react';
import { Controller, useFormContext } from 'react-hook-form';
import { calculateRegisterTotal } from '@/utils/calculate-register-total';
import { differenceInDays } from 'date-fns';
import { NewRegisterSchema } from '@/schemas/new-register-schema';
import { Container, HeadText, Total, Values } from '../../../components/Cards/RegisterCard/styles';
import { RegisterItem } from '../../../components/Cards/RegisterItem';

interface CreationRegisterCardProps {
	id: number;
	showTotal?: boolean;
}

export function CreationRegisterCard({
	id,
	showTotal = true,
}: CreationRegisterCardProps) {
	const { watch, control } = useFormContext<NewRegisterSchema>();
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
				<div className='registerCard__titleContainer'>
					<span className='registerCard__title'>
						{register.date.toLocaleDateString('PT-BR')}
					</span>
				</div>
				<div className='registerCard__dateInterval'>
					{id + 1}/{diffInDays} registros
				</div>
			</HeadText>

			<Values>
				<Controller
					control={control}
					name={`registers.${id}.initial`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-initial`}
							editable
							icon={CashRegisterIcon}
							name='Inicial'
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.money`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-money`}
							editable
							icon={MoneyIcon}
							name='Espécie'
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.creditCard`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-creditCard`}
							editable
							icon={CreditCardIcon}
							name='Cartão'
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.pix`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-pix`}
							editable
							icon={PixLogoIcon}
							name='Pix'
							value={field.value}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={`registers.${id}.expenses`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-expenses`}
							editable
							icon={ReceiptXIcon}
							name='Despesas'
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
						name='Total'
						icon={ReceiptIcon}
						value={total || 0}
						style={{ border: 'none', fontWeight: 600 }}
					/>
				</Total>
			)}
		</Container>
	);
}
