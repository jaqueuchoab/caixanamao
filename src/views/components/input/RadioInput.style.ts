import styled from '@emotion/styled';

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xl}px;
`;

export const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.sm}px;
`;

export const RadioInput = styled.input`
  display: flex;
  width: ${({ theme }) => theme.sizes.lg}px;
  height: ${({ theme }) => theme.sizes.lg}px;
  padding: ${({ theme }) => theme.sizes.sm}px;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.inputs.stroke};

  // Remover configuração padrão de posiçào e aparência
  position: relative;
  appearance: none;

  &:checked {
    border-color: ${({ theme }) => theme.colors.inputs.marked};
    background-color: transparent;
  }

  &:checked::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ theme }) => theme.sizes.md}px;
    height: ${({ theme }) => theme.sizes.md}px;
    background: ${({ theme }) => theme.colors.inputs.marked};
    border-radius: 50%;
    position: absolute;
  }
`;
