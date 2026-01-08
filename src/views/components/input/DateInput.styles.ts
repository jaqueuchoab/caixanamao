import styled from '@emotion/styled';

export const DateInputContainer = styled.div`
  display: flex;
  height: ${({theme}) => theme.sizes['3xl']}px;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.sizes.sm}px;
  align-self: stretch;
`;

export const DateInputField = styled.input`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-self: stretch;
  padding: 0px ${({theme}) => theme.sizes['sm-x']}px;

  height: ${({theme}) => theme.sizes['3xl']}px;
  min-width: 95px;
  max-width: 105px;
  
  
  border-radius: ${({theme}) => theme.sizes['sm-x']}px;
  border: 1.4px solid ${({ theme }) => theme.colors.inputs.stroke};
  font-size: ${({ theme }) => theme.sizes.md}px;
  text-align: center;
`;