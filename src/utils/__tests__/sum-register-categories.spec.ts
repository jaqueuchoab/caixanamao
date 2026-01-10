import { describe, it, expect } from 'vitest';
import { sumRegisterCategories } from '../sum-register-categories';
import { RegisterType } from '@/@types/register/register';

describe('sumRegisterCategories', () => {
	it('deve retornar zero quando array vazio', () => {
		const result = sumRegisterCategories([]);

		expect(result).toEqual({
			valor_inicial: 0,
			valor_especie: 0,
			valor_cartao: 0,
			valor_pix: 0,
			valor_despesas: 0,
		});
	});

	it('deve somar valor de multiplos registros corretamente', () => {
		const mockRegisters: RegisterType[] = [
			{
				valor_inicial: 100,
				valor_especie: 50,
				valor_cartao: 200,
				valor_pix: 75,
				valor_despesas: 30,
			} as RegisterType,
			{
				valor_inicial: 200,
				valor_especie: 100,
				valor_cartao: 300,
				valor_pix: 125,
				valor_despesas: 70,
			} as RegisterType,
			{
				valor_inicial: 50,
				valor_especie: 25,
				valor_cartao: 100,
				valor_pix: 50,
				valor_despesas: 20,
			} as RegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);

		expect(result).toEqual({
			valor_inicial: 350, // 100 + 200 + 50
			valor_especie: 175, // 50 + 100 + 25
			valor_cartao: 600, // 200 + 300 + 100
			valor_pix: 250, // 75 + 125 + 50
			valor_despesas: 120, // 30 + 70 + 20
		});
	});

	it('deve somar numeros negativos corretamente', () => {
		const mockRegisters: RegisterType[] = [
			{
				valor_inicial: -100,
				valor_especie: -50,
				valor_cartao: 200,
				valor_pix: -75,
				valor_despesas: 30,
			} as RegisterType,
			{
				valor_inicial: 200,
				valor_especie: 100,
				valor_cartao: -100,
				valor_pix: 125,
				valor_despesas: -70,
			} as RegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);

		expect(result).toEqual({
			valor_inicial: 100, // -100 + 200
			valor_especie: 50, // -50 + 100
			valor_cartao: 100, // 200 + (-100)
			valor_pix: 50, // -75 + 125
			valor_despesas: -40, // 30 + (-70)
		});
	});

	it('deve somar um unico registro corretamente', () => {
		const mockRegisters: RegisterType[] = [
			{
				valor_inicial: 1000,
				valor_especie: 500,
				valor_cartao: 2000,
				valor_pix: 750,
				valor_despesas: 300,
			} as RegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);

		expect(result).toEqual({
			valor_inicial: 1000,
			valor_especie: 500,
			valor_cartao: 2000,
			valor_pix: 750,
			valor_despesas: 300,
		});
	});

	it('deve lidar com valores decimais corretamente', () => {
		const mockRegisters: RegisterType[] = [
			{
				valor_inicial: 100.5,
				valor_especie: 50.25,
				valor_cartao: 200.75,
				valor_pix: 75.1,
				valor_despesas: 30.9,
			} as RegisterType,
			{
				valor_inicial: 200.2,
				valor_especie: 100.3,
				valor_cartao: 300.4,
				valor_pix: 125.6,
				valor_despesas: 70.7,
			} as RegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);
		expect(result.valor_inicial).toBeCloseTo(300.7); // 100.5 + 200.2
		expect(result.valor_especie).toBeCloseTo(150.55); // 50.25 + 100.3
		expect(result.valor_cartao).toBeCloseTo(501.15); // 200.75 + 300.4
		expect(result.valor_pix).toBeCloseTo(200.7); // 75.1 + 125.6
		expect(result.valor_despesas).toBeCloseTo(101.6); // 30.9 + 70.7
	});
});
