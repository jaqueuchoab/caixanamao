import { useFormContext } from 'react-hook-form';
import { RegisterCard } from '../../components/Cards/RegisterCard';
import { Schema } from '..';
import { sumRegisterCategories } from '@/utils/sum-register-categories';
import { RegisterType } from '@/models/registers/register';

export function EndSummaryStep() {
	const { watch } = useFormContext<Schema>();
	const registers = watch('registers');
	const startDate = watch('startDate');
	const endDate = watch('endDate');

	const superRegister: RegisterType = {
		id: 0,
		startDate,
		endDate,
		values: sumRegisterCategories(registers),
	};

	return <RegisterCard register={superRegister} />;
}
