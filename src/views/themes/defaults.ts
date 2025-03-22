import { BaseColorsType, SizesType } from './themeType';

export const baseColorsDefault: BaseColorsType = {
	neutral: {
		'100': '#fefefe',
		'200': '#ededed',
		'250': '#dbdbdb',
		'300': '#c9c9c9',
		'400': '#929292',
		'600': '#484848',
		'700': '#363636',
		'800': '#242424',
		'900': '#161616',
		'950': '#080808',
	},
	green: {
		'100': '#f1ffea',
		'200': '#cbffbf',
		'300': '#a2ff7b',
		'400': '#00fb22',
		'600': '#00c318',
		'800': '#008f0e',
		'900': '#003e03',
		'950': '#012001',
	},
	blue: {
		'100': '#e0f0ff',
		'200': '#cae9ff',
		'300': '#93c7eb',
		'400': '#0072c3',
		'600': '#005fa3',
		'800': '#00538f',
		'900': '#00243d',
		'950': '#00243d',
	},
	red: {
		light: '#ad091d',
		dark: '#ff6c6c',
	},
};

export const sizesDefault: SizesType = {
	xs: 12,
	'2xs': 14,
	sm: 16,
	'2sm': 20,
	md: 24,
	'2md': 28,
	'3md': 32,
	'4md': 36,
	lg: 40,
	'2lg': 48,
	'3lg': 56,
	xl: 64,
	'2xl': 72,
};
