import { api } from '@/lib/api';
import { toast } from 'sonner';
import { RegisterType } from '@/@types/register/register';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fakeFetch(): Promise<RegisterType[] | []> {
	// Simula uma chamada fetch com Promise e setTimeout
	const data = await new Promise<RegisterType[]>((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: '1',
					iduser: '1',
					data: new Date(),
					data_final: new Date(),

					valor_inicial: 150,
					valor_especie: 220,
					valor_cartao: 0,
					valor_pix: 120,
					valor_despesas: 30,
				},
				{
					id: '2',
					iduser: '1',
					data: new Date(),
					data_final: new Date(),

					valor_inicial: 0,
					valor_especie: 42,
					valor_cartao: 94.9,
					valor_pix: 0,
					valor_despesas: 200,
				},
				{
					id: '3',
					iduser: '1',
					data: new Date(),
					data_final: new Date(),

					valor_inicial: 50,
					valor_especie: 20,
					valor_cartao: 200,
					valor_pix: 75,
					valor_despesas: 15,
				},
			]);
		}, 1200);
	});

	return data;
}

export async function fetchRegisters(): Promise<RegisterType[] | []> {
	try {
		const response = await api.get('/registers');
		// const data = await fakeFetch();
		const data = response.data;

		return data;
	} catch (error) {
		if (error instanceof Error) toast.error(error.message);
		return [];
	}
}
