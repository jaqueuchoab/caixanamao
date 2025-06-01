import React from 'react';
import style from './styles/Input.module.css';
<<<<<<< HEAD
import { useMode } from '../../context/ModeContext';
import { EyeClosedIcon, EyeIcon } from '@phosphor-icons/react';
=======
import { useContextTheme } from '../../context/ThemeContext';
import { Eye, EyeClosed } from '@phosphor-icons/react';
>>>>>>> feature/dashboard

type InputProps = {
	id: string;
	value: string;
	type: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	placeholder?: string;
	error: null | string;
	onChange: (target: HTMLInputElement) => void;
	onBlur: (value: string | number) => boolean;
};

const Input = ({
	id,
	value,
	type,
	setValue,
	placeholder,
	error,
	onChange,
	onBlur,
}: InputProps) => {
	const { themeMode } = useContextTheme();
	const [visible, setVisible] = React.useState(true);

	function errorConfig(error: string, themeMode: string) {
		return (
			<span style={{ color: `var(--error-${themeMode})`, marginBottom: '8px' }}>
				{error}
			</span>
		);
	}

	function visiblePassword(visible: boolean) {
		const input = document.querySelector<HTMLInputElement>('#password');
		if (visible) {
			input?.setAttribute('type', 'password');
			return (
<<<<<<< HEAD
				<EyeIcon size={24} color={`var(--input-${mode}-secondary-element)`} />
=======
				<Eye size={24} color={`var(--input-${themeMode}-secondary-element)`} />
>>>>>>> feature/dashboard
			);
		} else {
			input?.setAttribute('type', 'text');
			return (
<<<<<<< HEAD
				<EyeClosedIcon
					size={24}
					color={`var(--input-${mode}-secondary-element)`}
=======
				<EyeClosed
					size={24}
					color={`var(--input-${themeMode}-secondary-element)`}
>>>>>>> feature/dashboard
				/>
			);
		}
	}

	return (
		<div>
			<div
				id={style[themeMode]}
				className={`containerEmail ${style.inputContainer}`}
				style={
					error
						? { border: `1.4px solid var(--error-${themeMode})` }
						: { border: '' }
				}
			>
				<input
					id={id}
					type={type}
					value={value}
					autoComplete='off'
					className={style.input}
					placeholder={placeholder}
					onChange={({ target }) => onChange(target)}
					onBlur={({ target }) => onBlur(target.value)}
				/>
				{type === 'password' ? (
					<a onClick={() => setVisible(!visible)}>{visiblePassword(visible)}</a>
				) : (
					''
				)}
			</div>
			{error && error?.length !== 0 ? errorConfig(error, themeMode) : null}
		</div>
	);
};

export default Input;
