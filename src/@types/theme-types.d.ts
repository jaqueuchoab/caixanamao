import styled from '@emotion/styled';

type ActivityModeColorsType = {
	active: string;
	inactive: string;
};

type ButtonColorsType = {
	text: string;
	fill: string;
	hover: string;
	stroke: string;
};

export type ColorFullScaleType = {
	'100': string;
	'200': string;
	'300': string;
	'400': string;
	'500': string;
	'600': string;
	'700': string;
	'800': string;
	'900': string;
	'950': string;
};

export type ColorModeType = { light: string; dark: string };

export type BaseColorsType = {
	neutral: ColorFullScaleType;
	green: ColorFullScaleType;
	blue: ColorFullScaleType;
	red: ColorFullScaleType; // apenas light e dark
};

export type SizesType = {
	// atualmente em px
	px: number;
	'px-plus': number;
	xs: number;
	'xs-plus': number;
	sm: number;
	'sm-plus': number;
	'sm-x': number;
	md: number;
	'md-plus': number;
	lg: number;
	xl: number;
	'2xl': number;
	'3xl': number;
	'4xl': number;
	'5xl': number;
	'6xl': number;
	'7xl': number;
};

export type ThemeType = {
	colors: {
		baseColors: BaseColorsType;
		backgrounds: {
			primary: string;
			secondary: string;
			tertiary: string;
			navbar: string;
			fallback: string;
			dashboard: string;
			popup: string;
			'home-secondcard': string;
			'home-thirdcard': string;
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
			disabledColor: string;
			primary: ButtonColorsType;
			neutral: ButtonColorsType;
			admin: ButtonColorsType;
			danger: ButtonColorsType;
			link: ButtonColorsType;
		};
		register: {
			itemStroke: string;
			background: string;
			backgroundHighlight: string;
		};
	};
	sizes: SizesType;
};
