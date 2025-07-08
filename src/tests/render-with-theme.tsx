import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../views/themes/dark';
import { ReactNode } from 'react';

// por padrao os testes sao feitos com darkMode, caso deseje, mude aqui
const AllTheProviders = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

// exporta a funcao render novamente, mas com os wrappers necessarios para o conteudo
const renderWithTheme = (
	ui: ReactNode,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export { renderWithTheme };
