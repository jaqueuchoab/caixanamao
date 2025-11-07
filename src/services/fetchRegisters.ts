import { api } from '@/lib/api';
import { toast } from 'sonner';
import { RegisterInApiType, RegisterType } from '@/@types/register/register';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fakeFetch(): Promise<RegisterType[] | []> {
	// Simula uma chamada fetch com Promise e setTimeout
	const data = await new Promise<RegisterType[]>((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					startDate: new Date(),
					endDate: new Date(),

					initial: 150,
					money: 220,
					creditCard: 0,
					pix: 120,
					expenses: 30,
				},
				{
					id: 2,
					startDate: new Date(),
					endDate: new Date(),

					initial: 0,
					money: 42,
					creditCard: 94.9,
					pix: 0,
					expenses: 200,
				},
				{
					id: 3,
					startDate: new Date(),
					endDate: new Date(),
					
					initial: 50,
					money: 20,
					creditCard: 200,
					pix: 75,
					expenses: 15,
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
		const data = response.data.map((r: RegisterInApiType) => {
			return {
				id: r.id,
				startDate: r.data,
				endDate: r.data_final,
				initial: r.valor_inicial,
				money: r.valor_especie,
				creditCard: r.valor_cartao,
				expenses: r.valor_despesas,
				pix: r.valor_pix,
			};
		});

		return data;
	} catch (error) {
		if (error instanceof Error) toast.error(error.message);
		return [];
	}
}
