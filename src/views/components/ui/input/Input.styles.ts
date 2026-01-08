import styled from '@emotion/styled';

type Variant = 'light' | 'dark';

type InputContainerProps = {
  variant?: Variant;
  hasError?: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.sizes['3xl']}px;
  width: 100%;

  padding: 0 8px;
  margin-bottom: 8px;

  border-radius: ${({ theme }) => theme.sizes['sm-x']}px;
  border: 1.4px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.inputs.error : theme.colors.inputs.placeholder};

  background: ${({ theme }) => theme.colors.inputs.background};
`;

export const StyledInput = styled.input`
  flex: 1;
  height: 100%;

  border: none;
  outline: none;
  background: transparent;

  font-size: ${({ theme }) => theme.sizes.md}px;
  color: ${({ theme }) => theme.colors.texts.primary};

  &::placeholder {
    font-size: ${({ theme }) => theme.sizes.md}px;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  cursor: pointer;
`;

export const ErrorText = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: ${({ theme }) => theme.colors.inputs.error};
`;
