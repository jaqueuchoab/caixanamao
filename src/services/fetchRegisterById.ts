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
				id: '1',
				startDate: new Date(),
				endDate: new Date(),

				initial: 150,
				money: 220,
				creditCard: 0,
				pix: 120,
				expenses: 30,
			});
		}, 1200);
	});

	return data;
}

export async function fetchRegisterById(
	id: string | null,
): Promise<EditRegisterSchema | undefined> {
	try {
		const response = await api.get(`/registers/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		const data: EditRegisterSchema = response.data;
		return data;
	} catch (error) {
		if (error instanceof Error) toast.error(error.message);
		return undefined;
	}
}
