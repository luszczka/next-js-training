import styled from 'styled-components'

const StyledPageWrapper = styled.div<{ centered: boolean; isAnimated: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  background: ${({ isAnimated }) =>
    isAnimated ? 'linear-gradient(-45deg, #000,#003049,#d62828)' : 'linear-gradient(-45deg, #000, #003049)'};
  background-size: ${({ isAnimated }) => (isAnimated ? '300% 300%' : '100%')};
  animation: ${({ isAnimated }) => (isAnimated ? 'gradient 10s ease infinite' : '')};

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export { StyledPageWrapper }
