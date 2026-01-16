import { NewReportSchema } from '@/schemas/new-report-schema';
import Input from '@/views/components/ui/input/Input';
import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';
import { LabelInformation } from '@/views/pages/auth/signup/styles';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	gap: 24px;
	@media screen and (width > 768px) {
		max-width: 400px;
	}
`;

const Field = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	gap: 12px;
`;

export function ExtraInfoStep() {
	const { control, formState } = useFormContext<NewReportSchema>();

	return (
		<Container>
			<Field>
				<LabelInformation>
					Nome para o relatório (opcional)
				</LabelInformation>
				<Controller
					control={control}
					name={'nome'}
					render={({ field }) => (
						<Input
							id='nome'
							type='text'
							value={field.value ?? ''}
							onChange={field.onChange}
							placeholder='Para identificar este relatório'
							error={formState.errors?.nome?.message}
						/>
					)}
				/>
			</Field>

			<Field>
				<LabelInformation>
					Descrição para o relatório (opcional)
				</LabelInformation>
				<Controller
					control={control}
					name={'descricao'}
					render={({ field }) => (
						<Input
							style={{ width: '100%' }}
							id='descricao'
							type='text'
							value={field.value ?? ''}
							onChange={field.onChange}
							placeholder='Do que este relatório trata?'
							error={formState.errors?.descricao?.message}
						/>
					)}
				/>
			</Field>
		</Container>
	);
}
