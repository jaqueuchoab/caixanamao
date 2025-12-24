import {
	CashRegisterIcon,
	CreditCardIcon,
	MoneyIcon,
	PencilSimpleIcon,
	PixLogoIcon,
	ReceiptIcon,
	ReceiptXIcon,
	TrashIcon,
} from '@phosphor-icons/react';
import { RegisterItem } from '../RegisterItem';
import { Container, HeadText, Total, Values } from './styles';
import { Button } from '@components/ui/button/Button';
import { RegisterType } from '@/@types/register/register';
import { calculateRegisterTotal } from '@/utils/calculate-register-total';
import { ChoicePopup } from '@components/ui/popup/ChoicePopup';
import { useState } from 'react';
import { api } from '@/lib/api';

interface RegisterCardProps {
	canEdit?: boolean;
	canDelete?: boolean;
	showTotal?: boolean;
	register: RegisterType;
}

export function RegisterCard({
	canEdit = false,
	canDelete = false,
	showTotal = true,
	register,
}: RegisterCardProps) {
	const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);

	const toggleDeletePopup = () => {
		setIsDeletePopupOpen((prev) => !prev);
	};

	const handleDeleteRegister = async () => {
		await api.delete(`/registers/${register.id}`);
		window.location.reload();
	};

	const handleEditRegister = () => {
		window.location.href = `/dashboard/registers/edit/${register.id}`;
	};

	const startDateFormatted = new Date(register.startDate)
		.toLocaleString('pt-BR')
		.split(',')[0];
	const endDateFormatted = new Date(register.endDate)
		.toLocaleString('pt-BR')
		.split(',')[0];

	return (
		<Container style={showTotal ? {} : { paddingBottom: 12 }}>
			{isDeletePopupOpen && (
				<ChoicePopup
					title='Tem certeza que deseja excluir o registro?'
					description='Isso apagará para sempre'
					onClose={toggleDeletePopup}
					confirm={{
						text: 'Apagar',
						onConfirm: handleDeleteRegister,
					}}
					refuse={{
						text: 'Cancelar',
						onRefuse: toggleDeletePopup,
					}}
				/>
			)}

			<HeadText>
				<div className='registerCard__titleContainer'>
					<span className='registerCard__title'>
						Registro #{register.id.split('-')[0]}
					</span>
					<div className='registerCard__actions'>
						{canEdit && (
							<Button
								type='button'
								variant='neutral'
								title='Editar registro'
								onClick={handleEditRegister}
							>
								<PencilSimpleIcon
									className='registerCard__editIcon'
									size={20}
								/>
							</Button>
						)}
						{canDelete && (
							<Button
								type='button'
								variant='neutral'
								title='Editar registro'
								onClick={toggleDeletePopup}
							>
								<TrashIcon
									className='registerCard__removeIcon'
									size={20}
								/>
							</Button>
						)}
					</div>
				</div>

				<div className='registerCard__dateInterval'>
					<span className='registerCard__startDate'>
						{startDateFormatted}
					</span>
					até
					<span className='registerCard__endDate'>
						{endDateFormatted}
					</span>
				</div>
			</HeadText>

			<Values>
				<RegisterItem
					icon={CashRegisterIcon}
					name='Inicial'
					value={register.initial ?? 0}
				/>
				<RegisterItem
					icon={MoneyIcon}
					name='Espécie'
					value={register.money ?? 0}
				/>
				<RegisterItem
					icon={CreditCardIcon}
					name='Cartão'
					value={register.creditCard ?? 0}
				/>
				<RegisterItem
					icon={PixLogoIcon}
					name='Pix'
					value={register.pix ?? 0}
				/>
				<RegisterItem
					icon={ReceiptXIcon}
					name='Despesas'
					value={register.expenses ?? 0}
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
						name='Total'
						icon={ReceiptIcon}
						value={calculateRegisterTotal(register) || 0}
						style={{ border: 'none', fontWeight: 600 }}
					/>
				</Total>
			)}
		</Container>
	);
}
