import { ThemeType } from '../../@types/themeType';
import { baseColorsDefault, sizesDefault } from './defaults';

export const lightTheme: ThemeType = {
	colors: {
		baseColors: baseColorsDefault,
		backgrounds: {
			default: baseColorsDefault.neutral[100],
			primary: baseColorsDefault.neutral[100],
			secondary: baseColorsDefault.neutral[200],
			tertiary: baseColorsDefault.neutral[200],
			quarternary: baseColorsDefault.green[100],
		},
		texts: {
			primary: baseColorsDefault.neutral[950],
			secondary: baseColorsDefault.neutral[600],
			highlight: baseColorsDefault.green[900],
		},
		inputs: {
			background: baseColorsDefault.neutral[100],
			secondaryElement: baseColorsDefault.neutral[400],
			placeholder: baseColorsDefault.neutral[400],
			stroke: baseColorsDefault.neutral[300],
			marked: baseColorsDefault.green[800],
			error: baseColorsDefault.red.light,
			label: baseColorsDefault.neutral[600],
		},
		iconsColor: baseColorsDefault.neutral[950],
		ghostElements: {
			primary: baseColorsDefault.neutral[200],
			secondary: baseColorsDefault.neutral[250] || '#dbdbdb',
		},
		dotsAndBars: {
			cardDot: {
				active: baseColorsDefault.blue[400],
				inactive: baseColorsDefault.blue[300],
			},
			progressDot: {
				active: baseColorsDefault.green[200],
				inactive: baseColorsDefault.neutral[250] || '#dbdbdb',
			},
			progressBar: {
				active: baseColorsDefault.green[300],
				inactive: baseColorsDefault.neutral[300],
			},
		},
		buttons: {
			default: {
				fill: baseColorsDefault.green[200],
				stroke: baseColorsDefault.green[600],
				hover: baseColorsDefault.green[300],
				disabled: baseColorsDefault.neutral[200],
			},
			admin: {
				fill: baseColorsDefault.blue[200],
				hover: baseColorsDefault.blue[600],
				stroke: baseColorsDefault.blue[600],
				disabled: baseColorsDefault.neutral[600],
			},
			neutral: {
				fill: 'transparent',
				hover: baseColorsDefault.neutral[300],
			},
			destructive: {
				fill: baseColorsDefault.red.light,
				hover: baseColorsDefault.red.light,
				stroke: baseColorsDefault.red.dark,
			},
			invisible: {
				fill: 'transparent',
				hover: 'transparent',
				stroke: baseColorsDefault.neutral[600],
			},
		},
		register: {
			itemStroke: baseColorsDefault.neutral[300],
			background: baseColorsDefault.neutral[200],
			backgroundHighlight: baseColorsDefault.neutral[300],
		},
	},
	sizes: sizesDefault,
};
