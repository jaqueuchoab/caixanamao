import { ThemeType } from '../../@types/theme/theme-types';
import { baseColorsDefault, sizesDefault } from './defaults';

export const lightTheme: ThemeType = {
	colors: {
		baseColors: baseColorsDefault,
		backgrounds: {
			primary: baseColorsDefault.neutral[100],
			secondary: baseColorsDefault.neutral[200],
			tertiary: baseColorsDefault.neutral[200],
			navbar: baseColorsDefault.neutral[200],
			fallback: baseColorsDefault.neutral[100],
			dashboard: baseColorsDefault.neutral[100],
			popup: baseColorsDefault.neutral[200],
			'home-secondcard': baseColorsDefault.neutral[200],
			'home-thirdcard': baseColorsDefault.green[100],
		},
		texts: {
			primary: baseColorsDefault.neutral[950],
			secondary: baseColorsDefault.neutral[600],
			highlight: baseColorsDefault.green[800],
		},
		inputs: {
			background: baseColorsDefault.neutral[100],
			secondaryElement: baseColorsDefault.neutral[400],
			placeholder: baseColorsDefault.neutral[400],
			stroke: baseColorsDefault.neutral[300],
			marked: baseColorsDefault.green[800],
			error: baseColorsDefault.red[400],
			label: baseColorsDefault.neutral[600],
		},
		iconsColor: baseColorsDefault.neutral[950],
		ghostElements: {
			primary: baseColorsDefault.neutral[200],
			secondary: baseColorsDefault.neutral[300],
		},
		dotsAndBars: {
			cardDot: {
				active: baseColorsDefault.blue[400],
				inactive: baseColorsDefault.blue[300],
			},
			progressDot: {
				active: baseColorsDefault.green[200],
				inactive: baseColorsDefault.neutral[300],
			},
			progressBar: {
				active: baseColorsDefault.green[300],
				inactive: baseColorsDefault.neutral[300],
			},
		},
		buttons: {
			disabledColor: baseColorsDefault.neutral[300],
			primary: {
				text: baseColorsDefault.neutral[100],
				fill: baseColorsDefault.green[600],
				hover: baseColorsDefault.green[800],
				stroke: baseColorsDefault.green[800],
			},
			admin: {
				text: baseColorsDefault.neutral[100],
				fill: baseColorsDefault.blue[500],
				hover: baseColorsDefault.blue[600],
				stroke: baseColorsDefault.blue[800],
			},
			neutral: {
				text: baseColorsDefault.neutral[950],
				fill: 'transparent',
				hover: baseColorsDefault.neutral[100],
				stroke: baseColorsDefault.neutral[400],
			},
			danger: {
				text: baseColorsDefault.neutral[100],
				fill: baseColorsDefault.red[400],
				hover: baseColorsDefault.red[800],
				stroke: baseColorsDefault.red[200],
			},
			link: {
				text: baseColorsDefault.green[600],
				fill: 'transparent',
				hover: baseColorsDefault.green[900],
				stroke: '',
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
