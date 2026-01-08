import { CircleNotchIcon } from '@phosphor-icons/react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled(CircleNotchIcon)`
  animation: ${spin} 0.8s linear infinite;
`;

type SpinnerProps = {
  size?: number;
  color?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
};

export function Spinner({
  size = 18,
  color = 'currentColor',
  weight = 'bold',
}: SpinnerProps) {
  return <SpinnerIcon size={size} color={color} weight={weight} />;
}
