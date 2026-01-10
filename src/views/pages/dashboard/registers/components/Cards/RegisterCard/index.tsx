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
	register: Omit<RegisterType, 'iduser'>;
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
		await api.delete(`/registers/${register.id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		window.location.reload();
	};

	const handleEditRegister = () => {
		window.location.href = `/dashboard/registers/edit/${register.id}`;
	};

	const registerDateInterval = `${new Date(register.data).toLocaleDateString(
		'pt-br',
	)} até ${new Date(register.data_final).toLocaleDateString('pt-br')}`;

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
						{register.id === 'Registro atual'
							? 'Registro atual'
							: `Registro #${register.id.split('-')[0]}`}
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
								title='Remover registro'
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
					{registerDateInterval}
				</div>
			</HeadText>

			<Values>
				<RegisterItem
					icon={CashRegisterIcon}
					name='Inicial'
					value={register.valor_inicial ?? 0}
				/>
				<RegisterItem
					icon={MoneyIcon}
					name='Espécie'
					value={register.valor_especie ?? 0}
				/>
				<RegisterItem
					icon={CreditCardIcon}
					name='Cartão'
					value={register.valor_cartao ?? 0}
				/>
				<RegisterItem
					icon={PixLogoIcon}
					name='Pix'
					value={register.valor_pix ?? 0}
				/>
				<RegisterItem
					icon={ReceiptXIcon}
					name='Despesas'
					value={register.valor_despesas ?? 0}
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
