import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 500;
  cursor: pointer;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.muted};
  }
`;
