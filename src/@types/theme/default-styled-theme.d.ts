import { ThemeType } from './theme-types';

/**
 * @description sobrescreve o tema padrao que eh prop de todos os styled components
 * com o tipo personalizado ThemeType, proporcionando autocomplete com a tipagem correta
 */
declare module '@emotion/react' {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface Theme extends ThemeType {}
}
