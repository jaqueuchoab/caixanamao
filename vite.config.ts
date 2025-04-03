import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), visualizer({ open: true, filename: 'stats.html' })],
	ssr: {
		// Add npm packages containing invalid code here
		noExternal: ['some-library'],
	},
	build: {
		sourcemap: true,
	},
});
