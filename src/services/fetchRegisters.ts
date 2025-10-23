import { RegisterType } from 'src/models/registers/register';

export async function fetchRegisters(): Promise<RegisterType[] | []> {
	try {
		// Simula uma chamada fetch com Promise e setTimeout
		const response = await new Promise<RegisterType[]>((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 1,
						startDate: new Date(),
						endDate: new Date(),
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
						startDate: new Date(),
						endDate: new Date(),
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
						startDate: new Date(),
						endDate: new Date(),
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
