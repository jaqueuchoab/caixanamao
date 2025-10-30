import { ComponentProps, useMemo, ChangeEvent } from 'react';
import style from './styles/Input.module.css';
import { useContextTheme } from '@context/ThemeContext';

type MoneyInputProps = {
	value?: number;
	onChangeValue?: (value: number) => void;
	error?: string;
} & Omit<ComponentProps<'input'>, 'value' | 'onChange' | 'type'>;

function formatNumberBR(value?: number): string {
	if (value === undefined || value === null) return '';
	return value.toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

function parseInputToNumber(input: string): number | null {
	const digitsOnly = input.replace(/\D/g, '');
	if (digitsOnly.length === 0) return null;

	const integer = parseInt(digitsOnly, 10);
	if (Number.isNaN(integer)) return null;

	return integer / 100;
}

export default function MoneyInput({
	value,
	onChangeValue,
	error,
	id,
	...props
}: MoneyInputProps) {
	const { themeMode } = useContextTheme();

	const inputStyle = useMemo(() => {
		return error ? { border: `1.4px solid var(--error-${themeMode})` } : {};
	}, [error, themeMode]);

	return (
		<div style={{ marginBottom: 8 }}>
			<input
				id={id}
				className={style.input}
				autoComplete="off"
				value={formatNumberBR(value)}
				aria-invalid={Boolean(error) || undefined}
				aria-describedby={error ? `${id}-error` : undefined}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					const next = e.target.value;
					if (!next) {
						onChangeValue?.(0);
						return;
					}
					const parsed = parseInputToNumber(next);
					if (parsed === null) return;
					onChangeValue?.(parsed);
				}}
				inputMode="numeric"
				style={inputStyle}
				{...props}
			/>
			{error && error.length > 0 && (
				<span
					id={`${id}-error`}
					style={{
						color: `var(--error-${themeMode})`,
						fontSize: 14,
						marginBottom: '8px',
					}}
				>
					{error}
				</span>
			)}
		</div>
	);
}
