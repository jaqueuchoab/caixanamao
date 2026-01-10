import { RegisterType } from '@/@types/register/register';

export function calculateRegisterTotal(
	register: Omit<
		Partial<RegisterType>,
		'id' | 'iduser' | 'data' | 'data_final'
	>,
) {
	const values = {
		valor_inicial: register.valor_inicial,
		valor_especie: register.valor_especie,
		valor_cartao: register.valor_cartao,
		valor_pix: register.valor_pix,
		valor_despesas: register.valor_despesas,
	};
	return Object.entries(values).reduce((acc, [key, value]) => {
		const num = Number(value);
		if (key === 'valor_despesas') return acc - num;
		return acc + num;
	}, 0);
}
