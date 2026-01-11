import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { SkeletonProps } from '.';

const shimmer = keyframes`
  0% {
    background-position: -150% 0;
  }
  100% {
    background-position: 150% 0;
  }
`;

export const SkeletonContainer = styled.div<SkeletonProps>`
	width: 100%;
	display: block;

	background-color: ${({ theme }) => theme.colors.backgrounds.secondary};
	background-image: linear-gradient(
		90deg,
		${({ theme }) => theme.colors.backgrounds.primary} 0%,
		${({ theme }) => theme.colors.backgrounds.secondary} 50%,
		${({ theme }) => theme.colors.backgrounds.primary} 100%
	);
	background-size: 200% 100%; /* Grande o suficiente para suavizar */
	background-repeat: no-repeat;
	animation: ${shimmer} 1.6s linear infinite; /* Velocidade próxima do Tailwind */

	width: ${({ width }) =>
		typeof width === 'number' ? `${width}px` : width || '100%'};
	height: ${({ height }) =>
		typeof height === 'number' ? `${height}px` : height || '16px'};

	border-radius: ${({ borderRadius, variant }) => {
		if (variant === 'circle') return '50%';
		if (borderRadius) return borderRadius;
		return variant === 'text' ? '4px' : '8px';
	}};
`;

export const RegisterCardSkeleton = styled.div`
	min-width: 100%;

	height: 100dvh;
	max-height: 330px;

	display: flex;
	flex-direction: column;
	gap: 16px;
	flex: 1 0 0;

	border-radius: 12px;

	background: linear-gradient(
		90deg,
		${({ theme }) => theme.colors.backgrounds.primary} 0%,
		${({ theme }) => theme.colors.backgrounds.secondary} 50%,
		${({ theme }) => theme.colors.backgrounds.primary} 100%
	);
	background-size: 200% 100%;
	animation: ${shimmer} 1.2s ease-in-out infinite;

	@media screen and (width >= 820px) {
		max-width: 620px;
		min-width: 240px;
		max-height: 454px;
	}
`;
