import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['<rootDir>/src/tests/tests-setup.ts'],
	testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};

export default config;
