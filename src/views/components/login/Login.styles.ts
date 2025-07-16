import { baseColorsDefault } from './../../themes/defaults';
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

export const Information = styled.h3`
  font-size: ${({ theme }) => theme.sizes.lg + "px"};
  font-weight: 600;
  color: ${({theme}) => theme.colors.texts.primary};
`;

export const MultisetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  border: 1.6px solid ${({ theme }) => theme.colors.inputs.stroke};
`;

export const TabsSwitcher = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background-color: ${({ theme }) => theme.colors.baseColors.neutral[600]};
`;

export const ButtonSwitcher = styled.button`
  display: flex;
  padding: ${({theme}) => `${theme.sizes['sm-plus']}px ${theme.sizes['sm-x']}px`};
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex: 1 0 0;
  flex-wrap: wrap;
  border-radius: ${({ theme }) => theme.sizes.sm + "px"};
  background: ${({theme}) => theme.colors.backgrounds.secondary};
  color: ${({theme}) => theme.colors.texts.primary};
  font-size: ${({ theme }) => theme.sizes.md + "px"};
`;
