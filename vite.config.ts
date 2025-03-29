import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	ssr: {
		// Add npm packages containing invalid code here
		noExternal: ['some-library'],
	},
	build: {
		sourcemap: true,
	},
});
