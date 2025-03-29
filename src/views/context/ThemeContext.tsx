import { createContext, useContext, useEffect, useState } from 'react';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';
import { ThemeType } from '../themes/themeType';

type ThemeContextType = {
	themeMode: 'light' | 'dark';
	theme: ThemeType;
	switchTheme: VoidFunction;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
	const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		const storedMode = localStorage.getItem('mode');

		if (!storedMode || (storedMode !== 'light' && storedMode !== 'dark'))
			localStorage.setItem('mode', 'light');
		else setThemeMode(storedMode);
	}, []);
	// obtem constantemente o valor atualizado do localStorage ou define para 'light' como padrao

	/**
	 * alterna entre 'light' e 'dark' com base no estado anterior
	 * @returns 'light' | 'dark'
	 */
	const switchTheme = () => {
		setThemeMode((prev) => {
			const newMode = prev === 'light' ? 'dark' : 'light';
			localStorage.setItem('mode', newMode);
			return newMode;
		});
	};

	/**
	 * retorna a definição do tema correspondendo ao estado
	 */
	const theme = themeMode === 'dark' ? darkTheme : lightTheme;

	return (
		<ThemeContext.Provider value={{ themeMode, theme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error('useTheme ser chamado dentro de um ThemeContextProvider');
	return context;
};
