import { SignupSchema } from '@/schemas/signup.schema';
import Input from '@/views/components/ui/input/Input';
import { Controller, useFormContext } from 'react-hook-form';

export function CredentialsStep() {
	const { control, formState } = useFormContext<SignupSchema>();

	return (
		<>
			<Controller
				control={control}
				name={'email'}
				render={({ field }) => (
					<Input
						id='email'
						type='text'
						autoComplete='email'
						value={field.value ?? ''}
						onChange={field.onChange}
						placeholder='Digite seu melhor email'
						error={formState.errors?.email?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name={'senha'}
				render={({ field }) => (
					<Input
						type='password'
						autoComplete='current-password'
						value={field.value ?? ''}
						onChange={field.onChange}
						placeholder='Sua senha, com no mínimo 8 dígitos'
						error={formState.errors?.senha?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name={'senha_confirmacao'}
				render={({ field }) => (
					<Input
						type='password'
						autoComplete='current-password'
						value={field.value ?? ''}
						onChange={field.onChange}
						placeholder='Confirmação da senha acima'
						error={formState.errors?.senha_confirmacao?.message}
					/>
				)}
			/>
		</>
	);
}