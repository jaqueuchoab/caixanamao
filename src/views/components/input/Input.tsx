import React from 'react';
import style from './styles/Input.module.css';
import { useMode } from '../../context/ModeContext';
<<<<<<< HEAD
import { Eye, EyeClosed } from '@phosphor-icons/react';
=======
import { EyeClosedIcon, EyeIcon } from '@phosphor-icons/react';
>>>>>>> feature/carousel

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
	const { mode } = useMode();
	const [visible, setVisible] = React.useState(true);

	function errorConfig(error: string, mode: string) {
		return (
			<span style={{ color: `var(--error-${mode})`, marginBottom: '8px' }}>
				{error}
			</span>
		);
	}

	function visiblePassword(visible: boolean) {
		const input = document.querySelector<HTMLInputElement>('#password');
		if (visible) {
			input?.setAttribute('type', 'password');
<<<<<<< HEAD
			return <Eye size={24} color={`var(--input-${mode}-secondary-element)`} />;
		} else {
			input?.setAttribute('type', 'text');
			return (
				<EyeClosed size={24} color={`var(--input-${mode}-secondary-element)`} />
=======
			return (
				<EyeIcon size={24} color={`var(--input-${mode}-secondary-element)`} />
			);
		} else {
			input?.setAttribute('type', 'text');
			return (
				<EyeClosedIcon
					size={24}
					color={`var(--input-${mode}-secondary-element)`}
				/>
>>>>>>> feature/carousel
			);
		}
	}

	return (
		<div>
			<div
				id={style[mode]}
				className={`containerEmail ${style.inputContainer}`}
				style={
					error
						? { border: `1.4px solid var(--error-${mode})` }
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
			{error && error?.length !== 0 ? errorConfig(error, mode) : null}
		</div>
	);
};

export default Input;
