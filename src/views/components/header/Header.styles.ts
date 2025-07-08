import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 4rem;
	padding: 1.5rem var(--size-2lg) 0 var(--size-2lg);
`;

export const HeaderLogo = styled.img`
	height: 32px;

	@media screen and (width > 768px) {
		& {
			height: 32px;
		}
	}
`;

export const HeaderNav = styled.nav`
	display: flex;
	justify-content: space-between;
`;
