import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './Button.styles';
import { useTheme } from '../../hooks/useTheme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'neutral' | 'admin' | 'danger' | 'link';
	fill_width?: boolean;
	text_align?: 'center' | 'left';
};

export function Button({
	variant = 'primary',
	fill_width = false,
	text_align = 'left',
	...props
}: ButtonProps) {
	const theme = useTheme();

	return (
		<ButtonContainer
			$variant={variant}
			$fill_width={fill_width}
			$text_align={text_align}
			$theme={theme}
			{...props}
		>
			{props.children}
		</ButtonContainer>
	);
}
