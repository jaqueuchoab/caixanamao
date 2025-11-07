import { EditableRegisterType } from '@/@types/register/register';

export function sumRegisterCategories(registers: EditableRegisterType[]) {
	return registers.reduce(
		(acc, r) => {
			acc.initial += r.initial;
			acc.money += r.money;
			acc.creditCard += r.creditCard;
			acc.pix += r.pix;
			acc.expenses += r.expenses;
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
