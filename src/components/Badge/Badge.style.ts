import styled from 'styled-components';

export const StyledBadgeWrapper = styled.button<{
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

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }
`;
