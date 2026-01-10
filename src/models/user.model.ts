export type User = {
	iduser: string;
	nome: string;
	cpf: string;
	nasc: Date | null;
	email: string;
	senha: string;
	id_cargo: number;
	id_empresa: number | null;
	ativo: boolean | null;
	criado_em: Date | null;
	atualizado_em: Date | null;
};
