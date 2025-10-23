import { EditableRegisterCard } from '../../components/EditableRegisterCard';

export function CardFillStep() {
	return (
		<EditableRegisterCard
			register={{
				id: 0,
				startDate: new Date(),
				endDate: new Date(),
				values: {
					initial: 0,
					money: 0,
					creditCard: 0,
					pix: 0,
					expenses: 0,
				},
			}}
		/>
	);
}
