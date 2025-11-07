import { z } from 'zod';

export const editRegisterSchema = z.object({
	startDate: z.date().optional(),
	endDate: z.date().optional(),
	initial: z.number(),
	money: z.number(),
	creditCard: z.number(),
	pix: z.number(),
	expenses: z.number(),
});

export type EditRegisterSchema = z.infer<typeof editRegisterSchema>;
