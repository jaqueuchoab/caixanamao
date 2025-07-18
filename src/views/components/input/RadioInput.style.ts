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

  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.inputs.stroke};
`;