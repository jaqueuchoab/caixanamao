import styled from '@emotion/styled';

type ButtonSwitcherProps = {
  active: boolean;
};

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

  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  color: ${({ theme }) => theme.colors.texts.primary};
`;

// Estilos para o LoginRegister
export const LoginRegister = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const Information = styled.h3`
  font-size: ${({ theme }) => theme.sizes.lg + 'px'};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.texts.primary};
`;

export const LabelInformation = styled.label`
  color: ${({ theme }) => theme.colors.texts.primary};
`;
