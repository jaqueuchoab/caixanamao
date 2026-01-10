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
import { EditRegisterSchema } from '@/schemas/edit-register-schema';
import {
	Container,
	HeadText,
	Total,
	Values,
} from '../../../components/Cards/RegisterCard/styles';
import { RegisterItem } from '../../../components/Cards/RegisterItem';

interface PatchableRegisterCardProps {
	id: number;
	showTotal?: boolean;
}

export function PatchableRegisterCard({
	id,
	showTotal = true,
}: PatchableRegisterCardProps) {
	const { watch, control } = useFormContext<EditRegisterSchema>();
	const register = watch();

	if (!register || !register.data || !register.data_final) {
		return null;
	}

	const { data, data_final } = register;

	const registerDateInterval = `${new Date(data).toLocaleDateString(
		'PT-BR',
	)} até ${new Date(data_final).toLocaleDateString('PT-BR')}`;

	const total = calculateRegisterTotal(register);

	return (
		<Container>
			<HeadText>
				<div className='registerCard__titleContainer'>
					<span className='registerCard__title'>
						{registerDateInterval}
					</span>
				</div>
				<div className='registerCard__dateInterval'>1/1 registros</div>
			</HeadText>

			<Values>
				<Controller
					control={control}
					name={'valor_inicial'}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_inicial`}
							editable
							icon={CashRegisterIcon}
							name='Inicial'
							value={field.value ?? 0}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={'valor_especie'}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_especie`}
							editable
							icon={MoneyIcon}
							name='Espécie'
							value={field.value ?? 0}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={'valor_cartao'}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_cartao`}
							editable
							icon={CreditCardIcon}
							name='Cartão'
							value={field.value ?? 0}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={'valor_pix'}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_pix`}
							editable
							icon={PixLogoIcon}
							name='Pix'
							value={field.value ?? 0}
							onChangeValue={field.onChange}
						/>
					)}
				/>
				<Controller
					control={control}
					name={'valor_despesas'}
					render={({ field }) => (
						<RegisterItem
							id={`${id}-valor_despesas`}
							editable
							icon={ReceiptXIcon}
							name='Despesas'
							value={field.value ?? 0}
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
