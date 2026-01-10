import { useState } from 'react';
import styled from '@emotion/styled';
import { CalendarIcon } from '@phosphor-icons/react';
import { useContextTheme } from '@/views/context/ThemeContext';

type Mode = 'day' | 'month' | 'year';

type DateInputProps = {
	value: Date | undefined;
	placeholderText?: string;
	setValue: (value: Date | null) => void;
	error?: string;
	mode?: Mode;
	onBlur?: () => void;
};

const InputWrapper = styled.div<{ hasError: boolean }>`
	display: flex;
	align-items: center;
	position: relative; /* Necessário para o posicionamento absoluto */
	height: 48px;
	width: 100%;
	border-radius: 8px;
	border: 1px solid
		${({ theme, hasError }) => {
			return hasError
				? theme.colors.inputs.error
				: theme.colors.inputs.stroke;
		}};
	margin-bottom: 8px;
	padding: 0 12px;
	background: ${({ theme }) => theme.colors.inputs.background};
`;

// Texto do Placeholder que fica "flutuando"
const PlaceholderText = styled.span`
	position: absolute;
	left: 42px; /* Espaço para o ícone (12px padding + 18px icon + gap) */
	top: 50%;
	transform: translateY(-50%);
	color: ${({ theme }) => theme.colors.inputs.placeholder};
	font-size: var(--size-sm);
	pointer-events: none; /* O PULO DO GATO: O clique atravessa este texto e vai para o input */
	user-select: none;
	z-index: 1;
`;

const StyledInput = styled.input<{ isEmpty: boolean }>`
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
	background: transparent;
	font-size: 16px;
	border-radius: 8px;
	padding-left: 12px;
	z-index: 2; /* Garante que o input fique acima do placeholder visualmente se tiver cor */

	/* Controla a cor do texto */
	color: ${({ theme, isEmpty }) =>
		isEmpty ? 'transparent' : theme.colors.texts.primary};

	/* Ao focar, a máscara dd/mm/aaaa deve aparecer (cor normal) */
	&:focus {
		color: ${({ theme }) => theme.colors.texts.primary};
	}

	&::-webkit-calendar-picker-indicator {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}
`;

export default function DateInput({
	value,
	setValue,
	placeholderText,
	error,
	mode = 'day',
	onBlur,
}: DateInputProps) {
	const { themeMode, theme } = useContextTheme();
	const [isFocused, setIsFocused] = useState(false);

	const formatNative = (date: Date | undefined) => {
		if (!date) return '';
		const d = date;
		if (mode === 'year') return d.getFullYear().toString();
		if (mode === 'month') return d.toISOString().slice(0, 7);
		return d.toISOString().slice(0, 10);
	};

	const parseNative = (val: string) => {
		if (!val) return null;
		if (mode === 'year') return new Date(Number(val), 0, 1);
		if (mode === 'month') {
			const [y, m] = val.split('-').map(Number);
			return new Date(y, m - 1, 1);
		}
		return new Date(val);
	};

	const inputType =
		mode === 'year' ? 'number' : mode === 'month' ? 'month' : 'date';

	// Verifica se está "vazio" (sem valor E sem foco)
	// Se tiver foco, consideramos que NÃO está vazio para mostrar a máscara dd/mm/aaaa
	const showPlaceholder = !value && !isFocused;

	return (
		<div>
			<InputWrapper hasError={!!error}>
				<CalendarIcon
					color={theme.colors.inputs.secondaryElement}
					size={18}
					strokeWidth={1.6}
					style={{ minWidth: '18px' }}
				/>

				{/* Renderiza o texto do placeholder sobre o input se necessário */}
				{showPlaceholder && (
					<PlaceholderText>{placeholderText}</PlaceholderText>
				)}

				<StyledInput
					type={inputType}
					value={formatNative(value)}
					onChange={(e) => setValue(parseNative(e.target.value))}
					onFocus={() => setIsFocused(true)}
					onBlur={() => {
						setIsFocused(false);
						if (onBlur) onBlur();
					}}
					isEmpty={!value} // Passamos para o styled component controlar a transparência
					min={mode === 'year' ? '1900' : undefined}
					max={mode === 'year' ? '2100' : undefined}
				/>
			</InputWrapper>

			{error && (
				<span
					style={{
						color: `var(--error-${themeMode})`,
						fontSize: 14,
						marginTop: '4px',
						display: 'block',
					}}
				>
					{error}
				</span>
			)}
		</div>
	);
}
