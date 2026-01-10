import styled from '@emotion/styled';

export const LoginMainContainer = styled.main`
	max-height: 100dvh;
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 32px;

	#heading {
		width: 100%;
		display: flex;
		flex-flow: column;
		gap: 12px;

		& #logo {
			place-self: start;
			margin-bottom: 24px;
		}

		& h1 {
			font-size: 24px;
		}

		& p {
			color: ${({ theme }) => theme.colors.texts.secondary};
			font-size: 14px;
		}
	}

	#content {
		order: 1;
		padding: 0 24px;
		width: 100%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		gap: 24px;
	}

	div#artwork {
		display: none;
	}

	#form {
		display: flex;
		flex-flow: column;
		gap: 12px;
	}

	#signup-link {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.texts.highlight};

		&:hover {
			text-decoration: underline;
		}
	}

	@media screen and (width >= 768px) {
		#content {
			max-width: 36dvw;
			padding: 0;
		}

		#form {
			max-width: 90%;
		}

		#heading {
			width: 90%;
		}

		div#artwork {
			display: block;
			width: 100%;
			height: 100%;
			max-height: 100dvh;
			overflow: hidden;
		}

		div#artwork img {
			object-fit: cover;
			transform: scale(1.01);
			width: 100%;
			height: 100%;
		}
	}
`;
