import React from 'react';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';
import { ThemeType } from '../../@types/themeType';

type IModeContext = {
	mode: string;
	setMode: React.Dispatch<React.SetStateAction<string>>;
	localMode: string | null;
	setLocalMode: React.Dispatch<React.SetStateAction<string>>;
	theme: ThemeType;
};

const ModeContext = React.createContext<IModeContext | null>(null);

export const useMode = () => {
	const mode = React.useContext(ModeContext);
	if (!mode) throw new Error('useMode precisa estar em ModeContextProvider');
	return mode;
};

export const ModeContextProvider = ({ children }: React.PropsWithChildren) => {
	let localModeActive = localStorage.getItem('mode');
	const [localMode, setLocalMode] = React.useState(
		localModeActive ? localModeActive : 'light'
	);

	if (!localModeActive) {
		localStorage.setItem('mode', 'light');
		localModeActive = localStorage.getItem('mode');
		if (localModeActive) setLocalMode(localModeActive);
	}

	const [mode, setMode] = React.useState(localMode);
	const theme = mode === 'dark' ? darkTheme : lightTheme;

	return (
		<ModeContext.Provider
			value={{ mode, setMode, localMode, setLocalMode, theme }}
		>
			{children}
		</ModeContext.Provider>
	);
};
