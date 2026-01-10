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
	min-width: 32px;
	min-height: 32px;
	max-width: 32px;
	max-height: 32px;

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
			font-size: 14px;
			font-weight: 600;

			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			place-self: start;

			max-width: 150px;

			@media screen and (width > 768px) {
				font-size: 14px;
				max-width: 180px;
			}
		}

		&.role {
			color: ${({ theme }) => theme.colors.texts.highlight};
			font-size: 12px;
			font-weight: 400;
		}
	}
`;
