import styled from '@emotion/styled';

export const Container = styled.div`
	min-width: 208px;
	padding: 12px 8px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	gap: 12px;

	border-radius: 8px;
	border: 2px solid ${({ theme }) => theme.colors.register.itemStroke};
`;

export const Infos = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	gap: 12px;
	flex: 1 0 0;
`;

export const Value = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;

	& .registerItem__currency {
		font-weight: 600;
	}
`;
