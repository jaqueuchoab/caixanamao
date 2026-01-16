import { api } from '@/lib/api';
import { toast } from 'sonner';
import { RegisterType } from '@/@types/register/register';
import { EditRegisterSchema } from '@/schemas/edit-register-schema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fakeFetch(): Promise<RegisterType> {
	// Simula uma chamada fetch com Promise e setTimeout
	const data = await new Promise<RegisterType>((resolve) => {
		setTimeout(() => {
			resolve({
				id: 'um-id',
				iduser: '1',
				data: new Date(),
				data_final: new Date(),

				valor_inicial: 150,
				valor_especie: 220,
				valor_cartao: 0,
				valor_pix: 120,
				valor_despesas: 30,
			});
		}, 1200);
	});

	return data;
}

export async function fetchRegisterById(
	id: string | null,
): Promise<EditRegisterSchema | undefined> {
	try {
		const response = await api.get(`/registers/${id}`);
		const data: EditRegisterSchema = response.data;
		return data;
	} catch (error) {
		if (error instanceof Error) toast.error(error.message);
		return undefined;
	}
}
