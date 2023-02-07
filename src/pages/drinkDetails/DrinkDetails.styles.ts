import styled, { css } from 'styled-components';

export const StyledBackgroundWrapper = styled.div<{
  drinkImgUrl: string;
}>`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  opacity: 0.09;
  position: absolute;

  ${({ drinkImgUrl }) =>
    drinkImgUrl &&
    css`
      background-image: url(${drinkImgUrl});
      background-size: cover;
    `};
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0;
  width: 100%;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 40px;
`;

export const StyledLeftHeader = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  opacity: 0.7;
  text-align: left;
`;

export const StyledRightHeader = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  opacity: 0.7;
  text-align: right;
`;

export const StyledIngredientsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 400px;
`;

export const StyledMeasurementsWrapper = styled.div`
  color: #fff;
  opacity: 0.7;
  display: flex;
`;

export const StyledMeasureNamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px 20px 0;

  div {
    padding: 0 20px 20px 0;
  }
`;

export const StyledMeasureValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  div {
    padding: 0 0 20px 0;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  opacity: 0.7;
`;

export const StyledText = styled.p`
  padding: 20px 0;
`;