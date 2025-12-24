import { useFormContext } from 'react-hook-form';
import { RegisterCard } from '../../components/Cards/RegisterCard';
import { EditRegisterSchema } from '@/schemas/edit-register-schema';

export function PatchSummaryStep() {
	const { watch } = useFormContext<EditRegisterSchema>();
	const register = watch();

	const superRegister = {
		...register,
	};

	return <RegisterCard register={superRegister} />;
}
