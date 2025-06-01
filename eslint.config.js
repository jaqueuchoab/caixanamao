import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
	js.configs.recommended,

	{
		files: ['**/*.ts', '**/*.tsx'],
		ignores: ['dist', '.eslint.config.js', 'node_modules'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
				HTMLInputElement: true,
				HTMLButtonElement: true,
				VoidFunction: true,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			'react-refresh/only-export-components': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			...tseslint.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,

			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
		},
	},
];
