import styled, { css } from 'styled-components';

export const StyledBadgeWrapper = styled.button<{
  isActive?: boolean;
  padding?: string;
}>`
  background-color: #b1893a;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  opacity: 0.5;
  padding: ${({ padding }) => padding ?? '20px'};
  width: fit-content;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `};

  &:hover {
    opacity: 1;
  }
`;
