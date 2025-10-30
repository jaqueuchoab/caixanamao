import {
	EditableRegisterType,
} from '@/models/registers/register';

export function calculateRegisterTotal(register: EditableRegisterType) {
	const values = register.values;
	return Object.entries(values).reduce((acc, [key, value]) => {
		const num = Number(value) || 0;
		if (key === 'expenses') return acc - num;
		return acc + value;
	}, 0);
}
