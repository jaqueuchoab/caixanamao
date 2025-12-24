import { z } from 'zod';

export const editRegisterSchema = z.object({
	id: z.string(),
	startDate: z.date(),
	endDate: z.date(),
	initial: z.number().optional(),
	money: z.number().optional(),
	creditCard: z.number().optional(),
	pix: z.number().optional(),
	expenses: z.number().optional(),
});

export type EditRegisterSchema = z.infer<typeof editRegisterSchema>;
