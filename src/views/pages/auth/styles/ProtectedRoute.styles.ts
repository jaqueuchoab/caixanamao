import styled from '@emotion/styled';

export const ProtectedContainer = styled.div`
	width: 100%;
	height: 100dvh;

	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 16px;

	p {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.texts.secondary};
	}
`;
