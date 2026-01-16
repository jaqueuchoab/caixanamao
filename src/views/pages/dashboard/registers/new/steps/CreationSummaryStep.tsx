import { useFormContext } from 'react-hook-form';
import { RegisterCard } from '../../components/Cards/RegisterCard';
import { sumRegisterCategories } from '@/utils/sum-register-categories';
import { RegisterType } from '@/@types/register/register';
import { NewRegisterSchema } from '../../../../../../schemas/new-register-schema';

export function CreationSummaryStep() {
	const { watch } = useFormContext<NewRegisterSchema>();
	const registers = watch('registers');
	const data = watch('data');
	const data_final = watch('data_final');

	const superRegister: Omit<RegisterType, 'iduser'> = {
		id: 'Registro atual',
		data,
		data_final,
		...sumRegisterCategories(registers),
	};

	return <RegisterCard register={superRegister} />;
}
