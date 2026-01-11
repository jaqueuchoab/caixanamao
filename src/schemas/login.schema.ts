import z from 'zod';

export const loginSchema = z.object({
	email: z.email('Email inválido'),
	senha: z.string().min(8, 'Deve ter pelo menos 8 caracteres'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
