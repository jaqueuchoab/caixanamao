import { useFormContext } from 'react-hook-form';
import { RegisterCard } from '../../components/Cards/RegisterCard';
import { sumRegisterCategories } from '@/utils/sum-register-categories';
import { RegisterType } from '@/@types/register/register';
import { NewRegisterSchema } from '../../../../../../schemas/new-register-schema';

export function EndSummaryStep() {
	const { watch } = useFormContext<NewRegisterSchema>();
	const registers = watch('registers');
	const startDate = watch('startDate');
	const endDate = watch('endDate');

	const superRegister: RegisterType = {
		id: 0,
		startDate,
		endDate,
		...sumRegisterCategories(registers),
	};

	return <RegisterCard register={superRegister} />;
}
