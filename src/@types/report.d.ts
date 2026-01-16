import { RegisterType } from './register/register';

export type ReportType = {
	id: number;
	nome: string | null;
	data: Date;
	descricao: string | null;
	iduser: string | null;
	arquivo_path: string | null;
	criado_em: Date | null;
	atualizado_em: Date | null;
	data_final: Date;
	values?: {
		valor_inicial: number;
		valor_especie: number;
		valor_cartao: number;
		valor_pix: number;
		valor_despesas: number;
	};
	registers?: RegisterType[];
};
