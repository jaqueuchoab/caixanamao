import { StyledSpinner } from './Spinner.styles';

type SpinnerProps = {
	size?: number;
};

export function Spinner({ size = 48 }: SpinnerProps) {
	return <StyledSpinner size={size} />;
}
