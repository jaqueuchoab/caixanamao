/** @jsxImportSource @emotion/react */

import { SkeletonContainer } from './styles';

export type SkeletonProps = {
	width?: string | number;
	height?: string | number;
	borderRadius?: string;
	variant?: 'text' | 'circle' | 'rect';
};

export function Skeleton({
	width,
	height,
	borderRadius,
	variant = 'rect',
}: SkeletonProps) {
	return (
		<SkeletonContainer
			width={width}
			height={height}
			borderRadius={borderRadius}
			variant={variant}
		/>
	);
}
