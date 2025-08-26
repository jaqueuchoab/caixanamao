import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), visualizer({ open: true, filename: 'stats.html' })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/views/components'),
			'@assets': path.resolve(__dirname, './src/views/assets'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@context': path.resolve(__dirname, './src/views/context'),
			'@tests': path.resolve(__dirname, './src/tests'),
			'@services': path.resolve(__dirname, './src/services'),
			'@models': path.resolve(__dirname, './src/models'),
		},
	},
	ssr: {
		// Add npm packages containing invalid code here
		noExternal: ['some-library'],
	},
	build: {
		sourcemap: true,
	},
});
