import { EditableRegisterType, RegisterType } from '@/@types/register/register';

export function calculateRegisterTotal(
	register: RegisterType | EditableRegisterType,
) {
	const values = {
		initial: register.initial,
		money: register.money,
		creditCard: register.creditCard,
		pix: register.pix,
		expenses: register.expenses,
	};
	return Object.entries(values).reduce((acc, [key, value]) => {
		const num = Number(value) || 0;
		if (key === 'expenses') return acc - num;
		return acc + value;
	}, 0);
}
