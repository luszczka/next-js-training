import { type ReactElement } from 'react';
import useFetch from '../../hooks/useFetch';
import { type RandomDrink } from '../../utils/APIResponsesTypes';
import SingleBox from '../SingleBox/SingleBox';
import { StyledDrinkOfTheDayHeader, StyledDrinkOfTheDayWrapper } from './DrinkOfTheDay.styled';

const DrinkOfTheDay = (): ReactElement => {
  const { data } = useFetch<{ drinks: RandomDrink[] }>({ path: '/random.php' });
  if (!data)
    return (
      <StyledDrinkOfTheDayWrapper>
        <StyledDrinkOfTheDayHeader>no drinks today</StyledDrinkOfTheDayHeader>
      </StyledDrinkOfTheDayWrapper>
    );

  const { drinks } = data;

  return (
    drinks && (
      <StyledDrinkOfTheDayWrapper>
        <SingleBox drinkName={drinks[0].strDrink} drinkImageUrl={drinks[0].strDrinkThumb} drinkID={drinks[0].idDrink} />
        <StyledDrinkOfTheDayHeader>drink of the day</StyledDrinkOfTheDayHeader>
      </StyledDrinkOfTheDayWrapper>
    )
  );
};

export default DrinkOfTheDay;
