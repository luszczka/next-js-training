import { type ReactElement } from 'react';
import useRandomDrink from '../../hooks/useRandomDrink';
import { StyledDrinkOfTheDayHeader, StyledDrinkOfTheDayWrapper } from './DrinkOfTheDay.styled';

const DrinkOfTheDay = (): ReactElement => {
  const data = useRandomDrink();
  console.log(data);

  if (!data) {
    return (
      <StyledDrinkOfTheDayWrapper>
        <StyledDrinkOfTheDayHeader>drink of the day</StyledDrinkOfTheDayHeader>
      </StyledDrinkOfTheDayWrapper>
    );
  }

  return (
    <>
      {data.idDrink}
      {data.strDrink}
    </>
  );
};

export default DrinkOfTheDay;
