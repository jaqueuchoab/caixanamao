import { useContextTheme } from '@/views/context/ThemeContext';
import { RadioContainer, RadioInput, RadioLabel } from './RadioInput.style';

type RadioOption = {
	label: string;
	value: number;
};

type RadioProps = {
	options: RadioOption[];
	value: number;
	error?: string;
	onChange?: (value: number) => void;
};

export function Radio({ options, value, onChange, error }: RadioProps) {
	const { themeMode } = useContextTheme();
	return (
		<RadioContainer>
			{options.map((option) => (
				<RadioLabel key={option.value}>
					<RadioInput
						type='radio'
						value={option.value}
						checked={value === option.value}
						onChange={() => onChange?.(option.value)}
					/>
					<span className='radioOptionLabel'>{option.label}</span>
				</RadioLabel>
			))}

			{error && (
				<span
					style={{
						color: `var(--error-${themeMode})`,
						fontSize: 14,
						marginBottom: '8px',
					}}
				>
					{error}
				</span>
			)}
		</RadioContainer>
	);
}

export default Radio;
