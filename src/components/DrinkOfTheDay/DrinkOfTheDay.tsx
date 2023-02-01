import { type ReactElement } from 'react'
import { StyledDrinkOfTheDayHeader, StyledDrinkOfTheDayWrapper } from './DrinkOfTheDay.styled'

const DrinkOfTheDay = (): ReactElement => {
  return (
        <StyledDrinkOfTheDayWrapper >
            <StyledDrinkOfTheDayHeader>drink of the day</StyledDrinkOfTheDayHeader>
        </StyledDrinkOfTheDayWrapper>
  )
}

export default DrinkOfTheDay
