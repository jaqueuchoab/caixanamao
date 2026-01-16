import {
	createContext,
	PropsWithChildren,
	useContext, useState
} from 'react';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';
import { ThemeType } from '../../@types/theme/theme-types';
import { ThemeProvider } from '@emotion/react';

type ThemeContextType = {
	themeMode: 'light' | 'dark';
	theme: ThemeType;
	switchTheme: VoidFunction;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
	const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
		const storedMode = localStorage.getItem('mode');
		if (storedMode === 'light' || storedMode === 'dark') {
			return storedMode;
		}
		localStorage.setItem('mode', 'light');
		return 'light';
	});

	const switchTheme = () => {
		setThemeMode((prev) => {
			const newMode = prev === 'light' ? 'dark' : 'light';
			localStorage.setItem('mode', newMode);
			return newMode;
		});
	};

	const theme = themeMode === 'dark' ? darkTheme : lightTheme;

	document.querySelector(
		'body',
	)!.style.background = `${theme.colors.backgrounds.navbar}`;

	return (
		<ThemeContext.Provider value={{ themeMode, theme, switchTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useContextTheme = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error(
			'useTheme ser chamado dentro de um ThemeContextProvider',
		);
	return context;
};
