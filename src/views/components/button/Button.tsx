import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './Button.styles';
import { useTheme } from '../../hooks/useTheme';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'default' | 'neutral' | 'admin' | 'destructive' | 'invisible';
	fillWidth?: boolean;
	textAlign?: 'center' | 'left';
};

export function Button({
	variant = 'default',
	fillWidth = false,
	textAlign = 'left',
	...props
}: ButtonProps) {
	const theme = useTheme();

	return (
		<ButtonContainer
			variant={variant}
			fillWidth={fillWidth}
			textAlign={textAlign}
			theme={theme}
			{...props}
		>
			{props.children}
		</ButtonContainer>
	);
}
