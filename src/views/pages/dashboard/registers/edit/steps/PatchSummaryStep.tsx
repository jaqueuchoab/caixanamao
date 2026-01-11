import { useFormContext } from 'react-hook-form';
import { RegisterCard } from '../../components/Cards/RegisterCard';
import { EditRegisterSchema } from '@/schemas/edit-register-schema';
import { RegisterType } from '@/@types/register/register';

export function PatchSummaryStep() {
	const { watch } = useFormContext<EditRegisterSchema>();
	const register = watch();

	const superRegister: Omit<RegisterType, 'iduser'> = {
		id: register.id,
		data: register.data,
		data_final: register.data_final,
		valor_inicial: register.valor_inicial ?? 0,
		valor_especie: register.valor_especie ?? 0,
		valor_cartao: register.valor_cartao ?? 0,
		valor_pix: register.valor_pix ?? 0,
		valor_despesas: register.valor_despesas ?? 0,
	};

	return <RegisterCard register={superRegister} />;
}
