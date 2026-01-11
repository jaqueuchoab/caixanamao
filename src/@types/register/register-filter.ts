export type RegisterFilter = {
	type: 'interval' | 'day' | 'month' | 'year' | undefined;
	date: {
		start: {
			day: string;
			month: string;
			year: string;
		};
		end: {
			day: string;
			month: string;
			year: string;
		};
	};
};

export const emptyFilter = {
	type: undefined,
} as RegisterFilter;

export const filterTypeMap: Record<
	NonNullable<RegisterFilter['type']>,
	string
> = {
	interval: 'Intervalo',
	day: 'Dia',
	month: 'Mês',
	year: 'Ano',
};
