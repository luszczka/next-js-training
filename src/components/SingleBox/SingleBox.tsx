import { type ReactElement } from 'react';
import Link from 'next/link';
import { StyledSingleBoxImg, StyledSingleBoxText, StyledSingleBoxWrapper } from './SingleBox.styled';
import { type SingleBoxTypes } from './SingleBox.types';

const SingleBox = ({ drinkName, drinkImageUrl, drinkID }: SingleBoxTypes): ReactElement => {
  return (
    <Link href={{ pathname: `/drinkDetails`, query: { drinkID } }}>
      <StyledSingleBoxWrapper>
        <StyledSingleBoxImg drinkImgUrl={drinkImageUrl}>
          <StyledSingleBoxText>{drinkName}</StyledSingleBoxText>
        </StyledSingleBoxImg>
      </StyledSingleBoxWrapper>
    </Link>
  );
};

export default SingleBox;
