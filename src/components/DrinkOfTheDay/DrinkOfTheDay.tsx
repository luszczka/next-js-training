import { type ReactElement } from 'react';
import useDrinkDetails from '../../hooks/useDrinkDetails';
import useRandomDrink from '../../hooks/useRandomDrink';

import { StyledDrinkOfTheDayHeader, StyledDrinkOfTheDayWrapper } from './DrinkOfTheDay.styled';

const DrinkOfTheDay = (): ReactElement => {
  const data = useRandomDrink();
  const data2 = useDrinkDetails('11007');
  console.log(data2);

  if (!data) {
    return (
      <StyledDrinkOfTheDayWrapper>
        <StyledDrinkOfTheDayHeader>drink of the day</StyledDrinkOfTheDayHeader>
      </StyledDrinkOfTheDayWrapper>
    );
  }

  return (
    <>
      {data.strDrink}
      <StyledDrinkOfTheDayWrapper>
        <StyledDrinkOfTheDayHeader>drink of the day</StyledDrinkOfTheDayHeader>
      </StyledDrinkOfTheDayWrapper>
    </>
  );
};

export default DrinkOfTheDay;
