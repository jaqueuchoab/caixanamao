type ActivityModeColorsType = {
	active: string;
	inactive: string;
};

type ButtonColorsType = {
	fill: string;
	hover?: string;
	stroke?: string;
	disabled?: string;
};

export type ColorScaleType = {
	'100': string;
	'200': string;
	'250'?: string;
	'300': string;
	'400': string;
	'600': string;
	'700'?: string;
	'800': string;
	'900': string;
	'950': string;
};

export type ColorModeType = { light: string; dark: string };

export type BaseColorsType = {
	neutral: ColorScaleType;
	green: ColorScaleType;
	blue: ColorScaleType;
	red: ColorModeType; // apenas light e dark
};

export type SizesType = {
	// atualmente em px
	xs: number;
	'2xs': number;
	sm: number;
	'2sm': number;
	md: number;
	'2md': number;
	'3md': number;
	'4md': number;
	lg: number;
	'2lg': number;
	'3lg': number;
	xl: number;
	'2xl': number;
};

export type ThemeType = {
	colors: {
		baseColors: BaseColorsType;
		backgrounds: {
			default: string;
			primary: string;
			secondary: string;
			tertiary: string;
			quarternary: string;
		};
		texts: {
			primary: string;
			secondary: string;
			highlight: string;
		};
		inputs: {
			background: string;
			secondaryElement: string;
			placeholder: string;
			stroke: string;
			marked: string;
			error: string;
			label: string;
		};
		iconsColor: string;
		ghostElements: {
			primary: string;
			secondary: string;
		};
		dotsAndBars: {
			cardDot: ActivityModeColorsType;
			progressDot: ActivityModeColorsType;
			progressBar: ActivityModeColorsType;
		};
		buttons: {
			default: ButtonColorsType;
			admin: ButtonColorsType;
			neutral: ButtonColorsType;
			destructive: ButtonColorsType;
			invisible: ButtonColorsType;
		};
		register: {
			itemStroke: string;
			background: string;
			backgroundHighlight: string;
		};
	};
	sizes: SizesType;
};
