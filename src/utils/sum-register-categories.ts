import { EditableRegisterType } from '@/@types/register/register';

export function sumRegisterCategories(registers: EditableRegisterType[]) {
	return registers.reduce(
		(acc, r) => {
			acc.initial += r.values.initial;
			acc.money += r.values.money;
			acc.creditCard += r.values.creditCard;
			acc.pix += r.values.pix;
			acc.expenses += r.values.expenses;
			return acc;
		},
		{
			initial: 0,
			money: 0,
			creditCard: 0,
			pix: 0,
			expenses: 0,
		},
	);
}
