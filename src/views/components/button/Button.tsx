<<<<<<< HEAD
import style from './Button.module.css';
import { useMode } from '../../context/ModeContext';

type ButtonProps = React.PropsWithChildren & {
	children: React.ReactNode;
	disabledButton?: boolean;
	onClick?: () => unknown;
};

const Button = ({ children, disabledButton, onClick }: ButtonProps) => {
	const { mode } = useMode();

	return (
		<button
			className={style.button}
			id={style[mode]}
			disabled={disabledButton}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
=======
import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, ButtonVariants } from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariants;
	fill_width?: boolean;
	text_align?: 'center' | 'left';
};

export function Button({
	variant = 'primary',
	fill_width = false,
	text_align = 'left',
	...props
}: ButtonProps) {
	return (
		<ButtonContainer
			$variant={variant}
			$fill_width={fill_width}
			$text_align={text_align}
			{...props}
		>
			{props.children}
		</ButtonContainer>
	);
}
>>>>>>> feature/dashboard
