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
