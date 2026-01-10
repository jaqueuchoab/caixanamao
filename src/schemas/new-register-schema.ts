import { z } from 'zod';

export const newRegisterSchema = z.object({
	data: z.date(),
	data_final: z.date(),
	registers: z.array(
		z.object({
			data: z.date(),
			valor_inicial: z.number(),
			valor_especie: z.number(),
			valor_cartao: z.number(),
			valor_pix: z.number(),
			valor_despesas: z.number(),
		}),
	),
});

export type NewRegisterSchema = z.infer<typeof newRegisterSchema>;
