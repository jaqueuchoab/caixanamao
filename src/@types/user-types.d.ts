export type LoginData = {
	email: string;
	senha: string;
};

export type IdentificationData = {
	nome: string;
	cpf: string;
	nasc: string;
	cargo: number;
};

export type CredentialsData = {
	email: string;
	senha: string;
	senha_confirmacao: string;
};

export type SignUpData = IdentificationData & CredentialsData;
