import { ThemeType } from '../../@types/themeType';
import { baseColorsDefault, sizesDefault } from './defaults';

export const darkTheme: ThemeType = {
	colors: {
		baseColors: baseColorsDefault,
		backgrounds: {
			default: baseColorsDefault.neutral[900],
			primary: baseColorsDefault.neutral[800],
			secondary: baseColorsDefault.neutral[900],
			tertiary: baseColorsDefault.neutral[800],
			quarternary: baseColorsDefault.green[950],
		},
		texts: {
			primary: baseColorsDefault.neutral[100],
			secondary: baseColorsDefault.neutral[300],
			highlight: baseColorsDefault.green[300],
		},
		inputs: {
			background: baseColorsDefault.neutral[800],
			secondaryElement: baseColorsDefault.neutral[300],
			placeholder: baseColorsDefault.neutral[400],
			stroke: baseColorsDefault.neutral[600],
			marked: baseColorsDefault.green[600],
			error: baseColorsDefault.red.dark,
			label: baseColorsDefault.neutral[300],
		},
		iconsColor: baseColorsDefault.neutral[100],
		ghostElements: {
			primary: baseColorsDefault.neutral[900],
			secondary: baseColorsDefault.neutral[800],
		},
		dotsAndBars: {
			cardDot: {
				active: baseColorsDefault.blue[300],
				inactive: baseColorsDefault.blue[600],
			},
			progressDot: {
				active: baseColorsDefault.green[300],
				inactive: baseColorsDefault.neutral[600],
			},
			progressBar: {
				active: baseColorsDefault.green[800],
				inactive: baseColorsDefault.neutral[600],
			},
		},
		buttons: {
			default: {
				fill: baseColorsDefault.green[900],
				hover: baseColorsDefault.green[800],
				stroke: baseColorsDefault.green[800],
				disabled: baseColorsDefault.neutral[600],
			},
			admin: {
				fill: baseColorsDefault.blue[900],
				hover: baseColorsDefault.blue[400],
				stroke: baseColorsDefault.blue[600],
				disabled: baseColorsDefault.neutral[600],
			},
			neutral: {
				fill: baseColorsDefault.neutral[900],
				hover: 'transparent',
				stroke: baseColorsDefault.neutral[600],
				disabled: baseColorsDefault.neutral[300],
			},
			destructive: {
				fill: baseColorsDefault.red.dark,
				hover: baseColorsDefault.red.dark,
				stroke: baseColorsDefault.red.light,
			},
			invisible: {
				fill: 'transparent',
				hover: 'transparent',
				stroke: baseColorsDefault.neutral[600],
			},
		},
		register: {
			itemStroke: baseColorsDefault.neutral[700] || '#363636',
			background: baseColorsDefault.neutral[800],
			backgroundHighlight: baseColorsDefault.neutral[700] || '#363636',
		},
	},
	sizes: sizesDefault,
};
