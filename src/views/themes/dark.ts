import { ThemeType } from './themeType';
import { baseColorsDefault, sizesDefault } from './defaults';

export const darkTheme: ThemeType = {
	colors: {
		baseColors: baseColorsDefault,
		backgrounds: {
			primary: baseColorsDefault.neutral[800],
			secondary: baseColorsDefault.neutral[900],
			tertiary: baseColorsDefault.neutral[800],
			navbar: baseColorsDefault.neutral[800],
			fallback: baseColorsDefault.neutral[800],
			dashboard: baseColorsDefault.neutral[950],
			popup: baseColorsDefault.neutral[800],
			'home-secondcard': baseColorsDefault.neutral[900],
			'home-thirdcard': baseColorsDefault.green[950],
		},
		texts: {
			primary: baseColorsDefault.neutral[100],
			secondary: baseColorsDefault.neutral[300],
			highlight: baseColorsDefault.green[300],
		},
		inputs: {
			background: baseColorsDefault.neutral[900],
			secondaryElement: baseColorsDefault.neutral[300],
			placeholder: baseColorsDefault.neutral[400],
			stroke: baseColorsDefault.neutral[600],
			marked: baseColorsDefault.green[600],
			error: baseColorsDefault.red[300],
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
				active: baseColorsDefault.green[600],
				inactive: baseColorsDefault.neutral[600],
			},
		},
		buttons: {
			disabledColor: baseColorsDefault.neutral[600],
			primary: {
				text: baseColorsDefault.neutral[100],
				fill: baseColorsDefault.green[600],
				hover: baseColorsDefault.green[800],
				stroke: baseColorsDefault.green[400],
			},
			admin: {
				text: baseColorsDefault.neutral[100],
				fill: baseColorsDefault.blue[600],
				hover: baseColorsDefault.blue[800],
				stroke: baseColorsDefault.blue[500],
			},
			neutral: {
				text: baseColorsDefault.neutral[100],
				fill: 'transparent',
				hover: baseColorsDefault.neutral[950],
				stroke: baseColorsDefault.neutral[600],
			},
			danger: {
				text: baseColorsDefault.neutral[100],
				fill: baseColorsDefault.red[800],
				hover: baseColorsDefault.red[900],
				stroke: baseColorsDefault.red[200],
			},
			link: {
				text: baseColorsDefault.green[300],
				fill: 'transparent',
				hover: baseColorsDefault.green[600],
				stroke: '',
			},
		},
		register: {
			itemStroke: baseColorsDefault.neutral[700],
			background: baseColorsDefault.neutral[800],
			backgroundHighlight: baseColorsDefault.neutral[700],
		},
	},
	sizes: sizesDefault,
};
