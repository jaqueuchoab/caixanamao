import { describe, it, expect } from 'vitest';
import { calculateRegisterTotal } from '../calculate-register-total';
import { RegisterType } from '@/@types/register/register';

describe('calculateRegisterTotal', () => {
	it('deve calcular o total corretamente com valores positivos', () => {
		const registro: RegisterType = {
			valor_inicial: 100,
			valor_especie: 50,
			valor_cartao: 200,
			valor_pix: 75,
			valor_despesas: 30,
		} as RegisterType;

		const resultado = calculateRegisterTotal(registro);

		// 100 + 50 + 200 + 75 - 30 = 395
		expect(resultado).toBe(395);
	});

	it('deve subtrair despesas corretamente', () => {
		const registro: RegisterType = {
			valor_inicial: 500,
			valor_especie: 100,
			valor_cartao: 300,
			valor_pix: 200,
			valor_despesas: 150, // deve ser subtraído
		} as RegisterType;

		const resultado = calculateRegisterTotal(registro);

		// 500 + 100 + 300 + 200 - 150 = 950
		expect(resultado).toBe(950);
	});

	it('deve lidar com valores negativos corretamente', () => {
		const registro: RegisterType = {
			valor_inicial: -100,
			valor_especie: 200,
			valor_cartao: -50,
			valor_pix: 150,
			valor_despesas: -30, // negativo deve ser somado (subtrair negativo = somar)
		} as RegisterType;

		const resultado = calculateRegisterTotal(registro);

		// -100 + 200 + (-50) + 150 - (-30) = -100 + 200 - 50 + 150 + 30 = 230
		expect(resultado).toBe(230);
	});

	it('deve retornar zero para registro com todos os valores zerados', () => {
		const registro: RegisterType = {
			valor_inicial: 0,
			valor_especie: 0,
			valor_cartao: 0,
			valor_pix: 0,
			valor_despesas: 0,
		} as RegisterType;

		const resultado = calculateRegisterTotal(registro);
		expect(resultado).toBe(0);
	});

	it('deve lidar com valores decimais corretamente', () => {
		const registro: RegisterType = {
			valor_inicial: 100.5,
			valor_especie: 50.25,
			valor_cartao: 200.75,
			valor_pix: 75.1,
			valor_despesas: 30.9,
		} as RegisterType;

		const resultado = calculateRegisterTotal(registro);

		// 100.5 + 50.25 + 200.75 + 75.1 - 30.9 = 395.7
		expect(resultado).toBeCloseTo(395.7);
	});

	it('deve funcionar quando apenas despesas tem valor', () => {
		const registro: RegisterType = {
			valor_inicial: 0,
			valor_especie: 0,
			valor_cartao: 0,
			valor_pix: 0,
			valor_despesas: 100,
		} as RegisterType;

		const resultado = calculateRegisterTotal(registro);
		// 0 + 0 + 0 + 0 - 100 = -100
		expect(resultado).toBe(-100);
	});

	it('deve funcionar quando não há despesas', () => {
		const registro: RegisterType = {
			valor_inicial: 100,
			valor_especie: 200,
			valor_cartao: 300,
			valor_pix: 400,
			valor_despesas: 0,
		} as RegisterType;

		const resultado = calculateRegisterTotal(registro);
		// 100 + 200 + 300 + 400 - 0 = 1000
		expect(resultado).toBe(1000);
	});
});
