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
import {
	Container,
	HeadText,
	Total,
	Values,
} from '../../../components/Cards/RegisterCard/styles';
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
	const startDate = watch('data');
	const endDate = watch('data_final');
	const diffInDays = differenceInDays(endDate, startDate) + 1;

	return (
		<Container>
			<HeadText>
				<div className='registerCard__titleContainer'>
					<span className='registerCard__title'>
						{register.data.toLocaleDateString('PT-BR')}
					</span>
				</div>
				<div className='registerCard__dateInterval'>
					{id + 1}/{diffInDays} registros
				</div>
			</HeadText>

			<Values>
				<Controller
					control={control}
					name={`registers.${id}.valor_inicial`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_inicial`}
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
					name={`registers.${id}.valor_especie`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_especie`}
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
					name={`registers.${id}.valor_cartao`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_cartao`}
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
					name={`registers.${id}.valor_pix`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_pix`}
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
					name={`registers.${id}.valor_despesas`}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_despesas`}
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
