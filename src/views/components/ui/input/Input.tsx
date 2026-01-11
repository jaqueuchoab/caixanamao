import { ComponentProps, useState } from 'react';
import { useContextTheme } from '@context/ThemeContext';
import { EyeIcon, EyeClosedIcon } from '@phosphor-icons/react';
import { StyledInput } from './Input.styles';

type InputProps = {
	error?: string;
} & ComponentProps<'input'>;

const Input = ({ error, type, ...props }: InputProps) => {
	const { themeMode } = useContextTheme();
	const [visible, setVisible] = useState(false);

	const isPassword = type === 'password';

	function toggleVisible() {
		setVisible((prev) => !prev);
	}

	return (
		<div
			style={{
				marginBottom: 8,
				display: 'flex',
				gap: 2,
				flexDirection: 'column',
			}}
		>
			<div style={{ position: 'relative', width: '100%' }}>
				<StyledInput
					{...props}
					type={isPassword ? (visible ? 'text' : 'password') : type}
					style={
						error
							? {
									border: `1.4px solid var(--error-${themeMode})`,
							  }
							: {}
					}
				/>

				{isPassword && (
					<button
						type='button'
						onClick={toggleVisible}
						style={{
							position: 'absolute',
							top: '50%',
							right: 16,
							transform: 'translateY(-50%)',
							background: 'none',
							border: 'none',
							padding: 0,
							cursor: 'pointer',
						}}
					>
						{visible ? (
							<EyeClosedIcon
								size={24}
								color={`var(--input-${themeMode}-secondary-element)`}
							/>
						) : (
							<EyeIcon
								size={24}
								color={`var(--input-${themeMode}-secondary-element)`}
							/>
						)}
					</button>
				)}
			</div>

			{error && (
				<span
					style={{
						color: `var(--error-${themeMode})`,
						fontSize: 14,
						marginTop: '8px',
					}}
				>
					{error}
				</span>
			)}
		</div>
	);
};

export default Input;
