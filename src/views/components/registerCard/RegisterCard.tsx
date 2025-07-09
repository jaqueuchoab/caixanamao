import {
	CashRegisterIcon,
	CreditCardIcon,
	MoneyIcon,
	PixLogoIcon,
	ReceiptIcon,
	ReceiptXIcon,
} from '@phosphor-icons/react';
import { RegisterItem } from '../registerItem/RegisterItem';
import { Container, HeadText, Total, Values } from './RegisterCard.styles';

export type RegisterValues = {
	initial: number;
	money: number;
	creditCard: number;
	pix: number;
	expenses: number;
};

interface RegisterCardProps {
	showTotal?: boolean;
	values: RegisterValues;
}

export function RegisterCard({ showTotal = true, values }: RegisterCardProps) {
	function calculateTotal() {
		return Object.entries(values).reduce((acc, [key, value]) => {
			if (key === 'expenses') return acc - value;
			return acc + value;
		}, 0);
	}

	return (
		<Container style={showTotal ? {} : { paddingBottom: 12 }}>
			<HeadText>
				<span className='registerCard__title'>#000</span>
				<div className='registerCard__dateInterval'>
					<span className='registerCard__startDate'>
						{new Date().toLocaleDateString('pt-BR')}
					</span>
					até
					<span className='registerCard__endDate'>
						{new Date().toLocaleDateString('pt-BR')}
					</span>
				</div>
			</HeadText>

			<Values>
				<RegisterItem
					icon={CashRegisterIcon}
					name='Inicial'
					value={values.initial}
				/>
				<RegisterItem icon={MoneyIcon} name='Espécie' value={values.money} />
				<RegisterItem
					icon={CreditCardIcon}
					name='Cartão'
					value={values.creditCard}
				/>
				<RegisterItem icon={PixLogoIcon} name='Pix' value={values.pix} />
				<RegisterItem
					icon={ReceiptXIcon}
					name='Despesas'
					value={values.expenses}
				/>
			</Values>

			{showTotal && (
				<Total>
					<RegisterItem
						name='Total'
						icon={ReceiptIcon}
						value={calculateTotal()}
						style={{ border: 'none' }}
					/>
				</Total>
			)}
		</Container>
	);
}
