import styled from 'styled-components';
import { ThemeType } from './theme-types';

/**
 * @description sobrescreve o tema padrao que eh prop de todos os styled components
 * com o tipo personalizado ThemeType, proporcionando autocomplete com a tipagem correta
 */
declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
