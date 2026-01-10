import { RegisterType } from '@/@types/register/register';

export function sumRegisterCategories(
	registers: Omit<RegisterType, 'iduser' | 'id' | 'data' | 'data_final'>[],
) {
	return registers.reduce(
		(acc, r) => {
			acc.valor_inicial += r.valor_inicial;
			acc.valor_especie += r.valor_especie;
			acc.valor_cartao += r.valor_cartao;
			acc.valor_pix += r.valor_pix;
			acc.valor_despesas += r.valor_despesas;
			return acc;
		},
		{
			valor_inicial: 0,
			valor_especie: 0,
			valor_cartao: 0,
			valor_pix: 0,
			valor_despesas: 0,
		},
	);
}
