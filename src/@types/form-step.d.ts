import { ComponentType } from 'react';

export type FormStep = {
	step: ComponentType;
	number: number;
	title?: string;
	description?: string;
};
