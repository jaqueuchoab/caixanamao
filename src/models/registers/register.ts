export type EditableRegisterType = {
	date: Date;
	values: {
		initial: number;
		money: number;
		creditCard: number;
		pix: number;
		expenses: number;
	};
};

export type RegisterType = {
	id: number;
	startDate: Date;
	endDate: Date;
	values: {
		initial: number;
		money: number;
		creditCard: number;
		pix: number;
		expenses: number;
	};
};
