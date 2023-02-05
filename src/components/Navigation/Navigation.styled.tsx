import styled from 'styled-components'

const StyledNavigation = styled.div`
  background: #010f16;
  box-shadow: 0px 10px 32px -15px #000;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  svg {
    animation: poppingIn 0.3s;
    :hover {
      opacity: 1;
      animation: poppingOut 0.3s;
    }
  }

  @keyframes poppingIn {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-7deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes poppingOut {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(7deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export { StyledNavigation }
