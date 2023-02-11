import styled, { css } from 'styled-components';

export const StyledSingleBoxWrapper = styled.div`
  border: 5px solid #b39048;
  border-radius: 20px;
  cursor: pointer;
  max-width: 250px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  &:hover {
    div {
      transform: scale(1.06);
      p {
        opacity: 1;
        transform: scale(0.9);
      }
    }
  }
`;

export const StyledSingleBoxImg = styled.div<{ drinkImgUrl: string }>`
  ${({ drinkImgUrl }) =>
    drinkImgUrl &&
    css`
      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${drinkImgUrl});
    `};
  width: 100%;
  height: 300px;
  padding: 20px;
  overflow: hidden;
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transition: transform 0.3s ease-in, opacity 0.4s ease-in-out;
`;

export const StyledSingleBoxText = styled.p`
  color: #a5ab95;
  opacity: 0.5;
  font-size: 35px;
  line-height: 1;
  font-family: 'Trebuchet MS';
  font-weight: 900;
  text-align: right;
  padding: 0 50px 10px 0;
  margin: 0;
  overflow: hidden;
  transition: transform 0.3s ease-in, opacity 0.4s ease-in-out;
  user-select: none;
`;
