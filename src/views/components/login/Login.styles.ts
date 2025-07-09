import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: self-start;
  padding: 5rem var(--size-3md);

  @media screen and (width > 768px) {
    & {
      flex-direction: row;
    }
  }

  background-color: ${({ theme }) => theme.colors.backgrounds.dashboard};
  color: ${({ theme }) => theme.colors.texts.secondary};
`;

// Estilos para o LoginEmail
export const LoginEmail = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
`;
