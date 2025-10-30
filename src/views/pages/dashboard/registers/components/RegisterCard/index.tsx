import {
	CashRegisterIcon,
	CreditCardIcon,
	MoneyIcon,
	PencilSimpleIcon,
	PixLogoIcon,
	ReceiptIcon,
	ReceiptXIcon,
} from '@phosphor-icons/react';
import { RegisterItem } from '../RegisterItem';
import { Container, HeadText, Total, Values } from './styles';
import { Button } from '@components/ui/button/Button';
import { RegisterType } from 'src/models/registers/register';
import { calculateRegisterTotal } from '@/utils/calculate-register-total';

interface RegisterCardProps {
	canEdit?: boolean;
	showTotal?: boolean;
	register: RegisterType;
}

export function RegisterCard({
	canEdit = false,
	showTotal = true,
	register,
}: RegisterCardProps) {
	const startDateFormatted = new Date(register.startDate)
		.toLocaleString('pt-BR')
		.split(',')[0];
	const endDateFormatted = new Date(register.endDate)
		.toLocaleString('pt-BR')
		.split(',')[0];

	return (
		<Container style={showTotal ? {} : { paddingBottom: 12 }}>
			<HeadText>
				<div className="registerCard__titleContainer">
					<span className="registerCard__title">#{register.id}</span>
					{canEdit && (
						<Button
							type="button"
							variant="neutral"
							title="Editar registro"
						>
							<PencilSimpleIcon
								className="registerCard__editIcon"
								size={20}
							/>
						</Button>
					)}
				</div>

				<div className="registerCard__dateInterval">
					<span className="registerCard__startDate">
						{startDateFormatted}
					</span>
					até
					<span className="registerCard__endDate">
						{endDateFormatted}
					</span>
				</div>
			</HeadText>

			<Values>
				<RegisterItem
					icon={CashRegisterIcon}
					name="Inicial"
					value={register.values.initial || 0}
				/>
				<RegisterItem
					icon={MoneyIcon}
					name="Espécie"
					value={register.values.money || 0}
				/>
				<RegisterItem
					icon={CreditCardIcon}
					name="Cartão"
					value={register.values.creditCard || 0}
				/>
				<RegisterItem
					icon={PixLogoIcon}
					name="Pix"
					value={register.values.pix || 0}
				/>
				<RegisterItem
					icon={ReceiptXIcon}
					name="Despesas"
					value={register.values.expenses || 0}
				/>
			</Values>

			{showTotal && (
				<Total
					data-category={
						calculateRegisterTotal(register) > 0
							? 'profit'
							: calculateRegisterTotal(register) < 0
							? 'loss'
							: ''
					}
				>
					<RegisterItem
						name="Total"
						icon={ReceiptIcon}
						value={calculateRegisterTotal(register) || 0}
						style={{ border: 'none', fontWeight: 600 }}
					/>
				</Total>
			)}
		</Container>
	);
}
