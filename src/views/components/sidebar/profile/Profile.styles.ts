import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	align-self: stretch;
`;

export const ProfilePhoto = styled.img`
	min-width: 40px;
	min-height: 40px;
	max-width: 40px;
	max-height: 40px;

	outline: 2px solid ${({ theme }) => theme.colors.inputs.stroke};
	border-radius: 100%;
`;

export const ProfileInfos = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;

	span {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		&.user {
			color: ${({ theme }) => theme.colors.texts.primary};
			font-size: 16px;
			font-weight: 600;
		}

		&.role {
			color: ${({ theme }) => theme.colors.texts.highlight};
			font-size: 14px;
			font-weight: 400;
		}
	}
`;
