import { describe, it, expect } from 'vitest';
import { calculateRegisterTotal } from '../calculate-register-total';
import { EditableRegisterType } from '@/@types/register/register';

describe('calculateRegisterTotal', () => {
	it('deve calcular o total corretamente com valores positivos', () => {
		const registro: EditableRegisterType = {
			initial: 100,
			money: 50,
			creditCard: 200,
			pix: 75,
			expenses: 30,
		} as EditableRegisterType;

		const resultado = calculateRegisterTotal(registro);

		// 100 + 50 + 200 + 75 - 30 = 395
		expect(resultado).toBe(395);
	});

	it('deve subtrair despesas corretamente', () => {
		const registro: EditableRegisterType = {
				initial: 500,
				money: 100,
				creditCard: 300,
				pix: 200,
				expenses: 150, // deve ser subtraído
		} as EditableRegisterType;

		const resultado = calculateRegisterTotal(registro);

		// 500 + 100 + 300 + 200 - 150 = 950
		expect(resultado).toBe(950);
	});

	it('deve lidar com valores negativos corretamente', () => {
		const registro: EditableRegisterType = {
				initial: -100,
				money: 200,
				creditCard: -50,
				pix: 150,
				expenses: -30, // negativo deve ser somado (subtrair negativo = somar)
		} as EditableRegisterType;

		const resultado = calculateRegisterTotal(registro);

		// -100 + 200 + (-50) + 150 - (-30) = -100 + 200 - 50 + 150 + 30 = 230
		expect(resultado).toBe(230);
	});

	it('deve retornar zero para registro com todos os valores zerados', () => {
		const registro: EditableRegisterType = {
				initial: 0,
				money: 0,
				creditCard: 0,
				pix: 0,
				expenses: 0,
		} as EditableRegisterType;

		const resultado = calculateRegisterTotal(registro);
		expect(resultado).toBe(0);
	});

	it('deve lidar com valores decimais corretamente', () => {
		const registro: EditableRegisterType = {
				initial: 100.5,
				money: 50.25,
				creditCard: 200.75,
				pix: 75.1,
				expenses: 30.9,
		} as EditableRegisterType;

		const resultado = calculateRegisterTotal(registro);

		// 100.5 + 50.25 + 200.75 + 75.1 - 30.9 = 395.7
		expect(resultado).toBeCloseTo(395.7);
	});

	it('deve funcionar quando apenas despesas tem valor', () => {
		const registro: EditableRegisterType = {
				initial: 0,
				money: 0,
				creditCard: 0,
				pix: 0,
				expenses: 100,
		} as EditableRegisterType;

		const resultado = calculateRegisterTotal(registro);
		// 0 + 0 + 0 + 0 - 100 = -100
		expect(resultado).toBe(-100);
	});

	it('deve funcionar quando não há despesas', () => {
		const registro: EditableRegisterType = {
				initial: 100,
				money: 200,
				creditCard: 300,
				pix: 400,
				expenses: 0,
		} as EditableRegisterType;

		const resultado = calculateRegisterTotal(registro);
		// 100 + 200 + 300 + 400 - 0 = 1000
		expect(resultado).toBe(1000);
	});
});
