import { z } from 'zod';

export const newReportSchema = z.object({
	data: z.date(),
	data_final: z.date(),
	iduser: z.uuidv4(),
	nome: z.string().optional().nullable(),
	descricao: z.string().optional().nullable(),
	arquivo_path: z.string().optional().nullable(),
});

export type NewReportSchema = z.infer<typeof newReportSchema>;
