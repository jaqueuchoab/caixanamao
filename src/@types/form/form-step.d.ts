import { JSX } from 'react';

export type FormStep = {
	step: JSX;
	number: number;
	title?: string;
	description?: string;
};
