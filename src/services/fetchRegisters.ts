import { RegisterType } from 'src/models/registers/register';

export async function fetchRegisters(): Promise<RegisterType[] | []> {
	try {
		// Simula uma chamada fetch com Promise e setTimeout
		const response = await new Promise<RegisterType[]>((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 1,
						startDate: 1719900000000,
						endDate: 1719986400000,
						values: {
							initial: 150,
							money: 220,
							creditCard: 0,
							pix: 120,
							expenses: 30,
						},
					},
					{
						id: 2,
						startDate: 1719986400000,
						endDate: 1720072800000,
						values: {
							initial: 0,
							money: 42,
							creditCard: 94.9,
							pix: 0,
							expenses: 200,
						},
					},
					{
						id: 3,
						startDate: 1720072800000,
						endDate: 1720159200000,
						values: {
							initial: 50,
							money: 20,
							creditCard: 200,
							pix: 75,
							expenses: 15,
						},
					},
				]);
			}, 1200);
		});

		return response;
	} catch (error) {
		// somente para periodo de desenvolvimento
		alert(error);
		return [];
	}
}
