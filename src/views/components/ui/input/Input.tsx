import { ComponentProps, useState } from 'react';
import style from './styles/Input.module.css';
import { useContextTheme } from '@context/ThemeContext';
import { EyeIcon, EyeClosedIcon } from '@phosphor-icons/react';

type InputProps = {
	error?: string;
} & ComponentProps<'input'>;

const Input = ({ error, ...props }: InputProps) => {
	const { themeMode } = useContextTheme();
	const [visible, setVisible] = useState(true);

	function visiblePassword(visible: boolean) {
		const input = document.querySelector<HTMLInputElement>('#password');
		if (visible) {
			input?.setAttribute('type', 'password');
			return (
				<EyeIcon
					size={24}
					color={`var(--input-${themeMode}-secondary-element)`}
				/>
			);
		} else {
			input?.setAttribute('type', 'text');
			return (
				<EyeClosedIcon
					size={24}
					color={`var(--input-${themeMode}-secondary-element)`}
				/>
			);
		}
	}

	return (
		<div style={{ marginBottom: 8 }}>
			<input
				{...props}
				autoComplete="off"
				className={style.input}
				style={
					error
						? { border: `1.4px solid var(--error-${themeMode})` }
						: {}
				}
			/>
			{props.type === 'password' ? (
				<a onClick={() => setVisible(!visible)}>
					{visiblePassword(visible)}
				</a>
			) : (
				''
			)}

			{error && error?.length !== 0 && (
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
		</div>
	);
};

export default Input;
