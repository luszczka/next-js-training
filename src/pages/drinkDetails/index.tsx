import { type ReactElement } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';
import { type DrinkDetails } from '../../utils/APIResponsesTypes';
import {
  StyledBackgroundWrapper,
  StyledIngredientsWrapper,
  StyledLeftHeader,
  StyledMainWrapper,
  StyledMeasurementsWrapper,
  StyledMeasureNamesWrapper,
  StyledMeasureValuesWrapper,
  StyledRightHeader,
  StyledRow,
  StyledText,
  StyledTextWrapper,
} from './DrinkDetails.styles';
import { type ParsedUrlQuery } from 'querystring';
import Ingredient from '../../components/Ingredient/Ingredient';
import { arrayFromExactData, DrinkDetailsEntries } from '../../utils/IngredientsArray';

export interface QParams extends ParsedUrlQuery {
  drinkID: string;
}
const DrinkDetail = (): ReactElement => {
  const { query } = useRouter();
  const { drinkID } = query as QParams;

  const { data } = useFetch<{ drinks: DrinkDetails[] }>({ path: `/lookup.php?i=${drinkID}` });

  if (!data) return <div>no drink data</div>;

  const ingredientsArray = arrayFromExactData(data.drinks[0], DrinkDetailsEntries.ingredient);
  const measureArray = arrayFromExactData(data.drinks[0], DrinkDetailsEntries.measure);

  return (
    <PageWrapper>
      <Navigation />
      <StyledBackgroundWrapper drinkImgUrl={data.drinks[0].strDrinkThumb} />
      <StyledMainWrapper>
        <StyledRow>
          <StyledLeftHeader>Ingredients</StyledLeftHeader>
          <StyledRightHeader>Measurements</StyledRightHeader>
        </StyledRow>
        <StyledRow>
          <div>
            <StyledIngredientsWrapper>
              {ingredientsArray.map((ingredient, index) => {
                return <Ingredient ingredient={ingredient} key={index} />;
              })}
            </StyledIngredientsWrapper>
          </div>
          <StyledMeasurementsWrapper>
            <StyledMeasureNamesWrapper>
              {ingredientsArray.map((ingredient, index) => {
                return <div key={index}>{ingredient}</div>;
              })}
            </StyledMeasureNamesWrapper>
            <StyledMeasureValuesWrapper>
              {measureArray.map((measure, index) => {
                return <div key={index}>{measure}</div>;
              })}
            </StyledMeasureValuesWrapper>
          </StyledMeasurementsWrapper>
        </StyledRow>
        <StyledRow>
          <StyledTextWrapper>
            <StyledLeftHeader>Glass</StyledLeftHeader>
            <StyledText>{data.drinks[0].strGlass}</StyledText>
          </StyledTextWrapper>
        </StyledRow>
        <StyledRow>
          <StyledTextWrapper>
            <StyledLeftHeader>How to</StyledLeftHeader>
            <StyledText>{data.drinks[0].strInstructions}</StyledText>
          </StyledTextWrapper>
        </StyledRow>
      </StyledMainWrapper>
    </PageWrapper>
  );
};

export default DrinkDetail;
