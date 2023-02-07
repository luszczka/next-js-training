import styled from 'styled-components'

const StyledDrinkOfTheDayWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 60px 0;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const StyledDrinkOfTheDayHeader = styled.h2`
  color: #eae2b7;
  font-size: 10rem;
  line-height: 7rem;
  word-spacing: 100vw;
  text-align: right;
  opacity: 0.03;
  position: absolute;
  user-select: none;
  z-index: -1;
`;

export { StyledDrinkOfTheDayWrapper, StyledDrinkOfTheDayHeader }
