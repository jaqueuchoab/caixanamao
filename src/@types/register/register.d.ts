export type EditableRegisterType = {
	date: Date;
	initial: number;
	money: number;
	creditCard: number;
	pix: number;
	expenses: number;
};

export type RegisterType = {
	id: number;
	startDate: Date;
	endDate: Date;

	initial: number;
	money: number;
	creditCard: number;
	pix: number;
	expenses: number;
};

export type RegisterInApiType = {
	data: Date;
	data_final: Date;
	id: string;
	iduser: string;
	valor_cartao: number;
	valor_despesas: number;
	valor_especie: number;
	valor_inicial: number;
	valor_pix: number;
};
