import { useContextTheme } from '@/views/context/ThemeContext';
import { Toaster as SonnerToaster, type ToasterProps } from 'sonner';

export function Toaster() {
	const { themeMode } = useContextTheme();
	return (
		<SonnerToaster
			expand={false}
			closeButton
			richColors
			toastOptions={{ style: { fontSize: 16 } }}
			duration={3000}
			theme={themeMode as ToasterProps['theme']}
		/>
	);
}
