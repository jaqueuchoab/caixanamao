import { describe, it, expect } from 'vitest';
import { sumRegisterCategories } from '../sum-register-categories';
import { EditableRegisterType } from '@/@types/register/register';

describe('sumRegisterCategories', () => {
	it('deve retornar zero quando array vazio', () => {
		const result = sumRegisterCategories([]);

		expect(result).toEqual({
			initial: 0,
			money: 0,
			creditCard: 0,
			pix: 0,
			expenses: 0,
		});
	});

	it('deve somar valor de multiplos registros corretamente', () => {
		const mockRegisters: EditableRegisterType[] = [
			{
				initial: 100,
				money: 50,
				creditCard: 200,
				pix: 75,
				expenses: 30,
			} as EditableRegisterType,
			{
				initial: 200,
				money: 100,
				creditCard: 300,
				pix: 125,
				expenses: 70,
			} as EditableRegisterType,
			{
				initial: 50,
				money: 25,
				creditCard: 100,
				pix: 50,
				expenses: 20,
			} as EditableRegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);

		expect(result).toEqual({
			initial: 350, // 100 + 200 + 50
			money: 175, // 50 + 100 + 25
			creditCard: 600, // 200 + 300 + 100
			pix: 250, // 75 + 125 + 50
			expenses: 120, // 30 + 70 + 20
		});
	});

	it('deve somar numeros negativos corretamente', () => {
		const mockRegisters: EditableRegisterType[] = [
			{
				initial: -100,
				money: -50,
				creditCard: 200,
				pix: -75,
				expenses: 30,
			} as EditableRegisterType,
			{
				initial: 200,
				money: 100,
				creditCard: -100,
				pix: 125,
				expenses: -70,
			} as EditableRegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);

		expect(result).toEqual({
			initial: 100, // -100 + 200
			money: 50, // -50 + 100
			creditCard: 100, // 200 + (-100)
			pix: 50, // -75 + 125
			expenses: -40, // 30 + (-70)
		});
	});

	it('deve somar um unico registro corretamente', () => {
		const mockRegisters: EditableRegisterType[] = [
			{
				initial: 1000,
				money: 500,
				creditCard: 2000,
				pix: 750,
				expenses: 300,
			} as EditableRegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);

		expect(result).toEqual({
			initial: 1000,
			money: 500,
			creditCard: 2000,
			pix: 750,
			expenses: 300,
		});
	});

	it('deve lidar com valores decimais corretamente', () => {
		const mockRegisters: EditableRegisterType[] = [
			{
				initial: 100.5,
				money: 50.25,
				creditCard: 200.75,
				pix: 75.1,
				expenses: 30.9,
			} as EditableRegisterType,
			{
				initial: 200.2,
				money: 100.3,
				creditCard: 300.4,
				pix: 125.6,
				expenses: 70.7,
			} as EditableRegisterType,
		];

		const result = sumRegisterCategories(mockRegisters);
		expect(result.initial).toBeCloseTo(300.7); // 100.5 + 200.2
		expect(result.money).toBeCloseTo(150.55); // 50.25 + 100.3
		expect(result.creditCard).toBeCloseTo(501.15); // 200.75 + 300.4
		expect(result.pix).toBeCloseTo(200.7); // 75.1 + 125.6
		expect(result.expenses).toBeCloseTo(101.6); // 30.9 + 70.7
	});
});
