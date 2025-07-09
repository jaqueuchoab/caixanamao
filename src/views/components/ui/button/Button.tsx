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
