import { z } from 'zod';

export const editRegisterSchema = z.object({
	id: z.string(),
	data: z.date(),
	data_final: z.date(),
	valor_inicial: z.number().optional(),
	valor_especie: z.number().optional(),
	valor_cartao: z.number().optional(),
	valor_pix: z.number().optional(),
	valor_despesas: z.number().optional(),
});

export type EditRegisterSchema = z.infer<typeof editRegisterSchema>;
