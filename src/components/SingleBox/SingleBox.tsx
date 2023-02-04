import { type ReactElement } from 'react';
import useFetch from '../../hooks/useFetch';
import { type DrinkDetails } from '../../utils/APIResponsesTypes';
import { StyledSingleBoxImg, StyledSingleBoxText, StyledSingleBoxWrapper } from './SingleBox.styled';
import { type SingleBoxTypes } from './SingleBox.types';

const SingleBox = ({ drinkName, drinkImageUrl, drinkID }: SingleBoxTypes): ReactElement => {
  const { data } = useFetch<{ drinks: DrinkDetails[] }>(`/lookup.php?i=${drinkID}`) || {};

  return (
    <StyledSingleBoxWrapper>
      <StyledSingleBoxImg
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,1)), url('${drinkImageUrl}')`,
        }}
      >
        <StyledSingleBoxText
          onClick={() => {
            console.log(data);
          }}
        >
          {drinkName}
        </StyledSingleBoxText>
      </StyledSingleBoxImg>
    </StyledSingleBoxWrapper>
  );
};

export default SingleBox;
