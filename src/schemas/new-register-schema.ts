import { z } from 'zod';

export const newRegisterSchema = z.object({
	startDate: z.date(),
	endDate: z.date(),
	registers: z.array(
		z.object({
			date: z.date(),
			initial: z.number(),
			money: z.number(),
			creditCard: z.number(),
			pix: z.number(),
			expenses: z.number(),
		}),
	),
});

export type NewRegisterSchema = z.infer<typeof newRegisterSchema>;
