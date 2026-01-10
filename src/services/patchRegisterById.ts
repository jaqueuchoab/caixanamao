import { api } from '@/lib/api';
import { EditRegisterSchema } from '@/schemas/edit-register-schema';

export async function patchRegisterById(
	id: string,
	registerPayload: Omit<EditRegisterSchema, 'id' | 'data' | 'data_final'>,
) {
	await api.patch(`/registers/${id}`, registerPayload);
}
