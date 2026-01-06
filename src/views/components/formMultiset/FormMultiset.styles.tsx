import { baseColorsDefault } from './../../themes/defaults';
import styled from '@emotion/styled';

type ButtonSwitcherProps = {
  active: boolean;
};

export const MultisetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 17px;
  border: 1.6px solid ${({ theme }) => theme.colors.inputs.stroke};
`;

export const TabsSwitcher = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 15px 15px 0px 0px;
  background-color: ${({ theme }) => theme.colors.buttons.switcher.fill};
`;

export const ButtonSwitcher = styled.button<ButtonSwitcherProps>`
  display: flex;
  padding: ${({ theme }) =>
    `${theme.sizes['sm-plus']}px ${theme.sizes['sm-x']}px`};
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex: 1 0 0;
  flex-wrap: wrap;

  border-radius: ${({ theme }) => theme.sizes.sm + 'px'};
  font-size: ${({ theme }) => theme.sizes.md + 'px'};
  color: ${({ theme }) => theme.colors.texts.primary};
  
  ${({theme, active}) => `background-color: ${active ? theme.colors.buttons.switcher.buttonActive : theme.colors.buttons.switcher.buttonInactive};`}
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes['sm-plus'] + 'px'};
  align-self: stretch;
  padding: ${({ theme }) =>
    `${theme.sizes.md}px ${theme.sizes['sm-x']}px ${theme.sizes['sm-plus']}px ${theme.sizes['sm-x']}px`};
`;
