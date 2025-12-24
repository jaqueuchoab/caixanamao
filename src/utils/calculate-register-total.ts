import { RegisterType } from '@/@types/register/register';

export function calculateRegisterTotal(
	register: Omit<RegisterType, 'id' | 'startDate' | 'endDate'>,
) {
	const values = {
		initial: register.initial,
		money: register.money,
		creditCard: register.creditCard,
		pix: register.pix,
		expenses: register.expenses,
	};
	return Object.entries(values).reduce((acc, [key, value]) => {
		const num = Number(value);
		if (key === 'expenses') return acc - num;
		return acc + num;
	}, 0);
}
