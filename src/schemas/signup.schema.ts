import z from 'zod';

export const signupSchema = z
	.object({
		nome: z.string().min(4, 'Digite um nome válido'),
		cpf: z
			.string()
			.regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, 'CPF inválido'),
		nasc: z.date('Escolha uma data válida'),
		cargo: z.number().min(1, 'Cargo inválido').max(4, 'Cargo inválido'),
		email: z.email('E-mail inválido'),
		senha: z.string().min(8, 'Deve ter pelo menos 8 caracteres'),
		senha_confirmacao: z
			.string()
			.min(8, 'Deve ter pelo menos 8 caracteres'),
	})
	.refine((data) => data.senha === data.senha_confirmacao, {
		message: 'As senhas não coincidem',
		path: ['senha_confirmacao'],
	});

export type SignupSchema = z.infer<typeof signupSchema>;
