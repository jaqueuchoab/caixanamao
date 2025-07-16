export type RegisterType = {
	id: number;
	startDate: number;
	endDate: number;
	values: {
		initial: number;
		money: number;
		creditCard: number;
		pix: number;
		expenses: number;
	};
};
