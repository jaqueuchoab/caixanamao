import { useMode } from '../context/ModeContext';

export function useTheme() {
	const { theme } = useMode();
	return theme;
}
