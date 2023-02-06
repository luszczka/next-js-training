import styled, { css } from 'styled-components';

export const StyledBackgroundWrapper = styled.div<{
  drinkImgUrl: string;
}>`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  opacity: 0.09;

  ${({ drinkImgUrl }) =>
    drinkImgUrl &&
    css`
      background-image: url(${drinkImgUrl});
      background-size: cover;
    `};
`;

export const StyledIngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  left: 20px;
  position: absolute;
  top: 30%;
  width: 400px;
`;

export const StyledIngredientsHeader = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  opacity: 0.7;
  left: 20px;
  position: absolute;
  top: 20%;
`;
