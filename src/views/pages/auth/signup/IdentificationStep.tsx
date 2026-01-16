import { Controller, useFormContext } from 'react-hook-form';
import { SignupSchema } from '@/schemas/signup.schema';
import Input from '@/views/components/ui/input/Input';
import DateInput from '@/views/components/ui/input/DateInput';
import { maskCPF } from '@/utils/maskCPF';
import Radio from '@/views/components/ui/input/Radio';
import { LabelInformation } from './styles';

export function IdentificationStep() {
	const { control, formState } = useFormContext<SignupSchema>();

	return (
		<div
			style={{
				paddingBottom: 12,
				display: 'flex',
				flexFlow: 'column',
				gap: 12,
			}}
		>
			<Controller
				control={control}
				name={'nome'}
				render={({ field }) => (
					<Input
						type='text'
						value={field.value ?? ''}
						onChange={field.onChange}
						placeholder='Seu nome e sobrenome'
						error={formState.errors?.nome?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name={'cpf'}
				render={({ field }) => (
					<Input
						type='text'
						value={maskCPF(field.value ?? '')}
						onChange={field.onChange}
						placeholder='Seu CPF com pontos e hífen'
						error={formState.errors?.cpf?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name='nasc'
				render={({ field }) => (
					<DateInput
						value={field.value}
						setValue={field.onChange}
						placeholderText='Sua data de nascimento'
						error={formState.errors?.nasc?.message}
					/>
				)}
			></Controller>

			<LabelInformation>Cargo atual: </LabelInformation>
			<Controller
				control={control}
				name={'cargo'}
				render={({ field }) => (
					<Radio
						value={field.value}
						onChange={field.onChange}
						options={[
							{ label: 'Colaborador', value: 1 },
							{ label: 'Administrador', value: 4 },
						]}
					/>
				)}
			/>
		</div>
	);
}
