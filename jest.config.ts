import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@tests/(.*)$': '<rootDir>/src/tests/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/src/tests/tests-setup.ts'],
	testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
	passWithNoTests: true,
};

export default config;
