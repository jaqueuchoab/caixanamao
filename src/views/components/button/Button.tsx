import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, ButtonVariants } from './Button.styles';
import { Spinner } from '../spinner/Spinner';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariants;
	fill_width?: boolean;
	text_align?: 'center' | 'left';
	loading?: boolean;
};

export function Button({
	variant = 'primary',
	fill_width = false,
	text_align = 'left',
	loading = false,
	disabled,
	...props
}: ButtonProps) {
	return (
		<ButtonContainer
			$variant={variant}
			$fill_width={fill_width}
			$text_align={text_align}
			disabled={disabled || loading}
			{...props}
		>
			{loading ? <Spinner size={20} color='#101910' /> : props.children}
		</ButtonContainer>
	);
}
