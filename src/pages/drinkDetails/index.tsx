import { type ReactElement } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';
import { type DrinkDetails } from '../../utils/APIResponsesTypes';
import { StyledBackgroundWrapper, StyledIngredientsHeader, StyledIngredientsWrapper } from './DrinkDetails.styles';
import { type ParsedUrlQuery } from 'querystring';
import Ingredient from '../../components/Ingredient/Ingredient';
import { IngredientsArray } from '../../utils/IngredientsArray';

export interface QParams extends ParsedUrlQuery {
  drinkID: string;
}
const DrinkDetail = (): ReactElement => {
  const { query } = useRouter();
  const { drinkID } = query as QParams;

  const { data } = useFetch<{ drinks: DrinkDetails[] }>({ path: `/lookup.php?i=${drinkID}` });

  if (!data) return <div>no drink data</div>;

  const ingredientsArray = IngredientsArray(data.drinks[0]);

  return (
    <PageWrapper>
      <Navigation />
      <StyledBackgroundWrapper drinkImgUrl={data.drinks[0].strDrinkThumb} />
      <StyledIngredientsHeader>Ingredients</StyledIngredientsHeader>
      <StyledIngredientsWrapper>
        {ingredientsArray.map((ingredient) => {
          return <Ingredient ingredient={ingredient} key={ingredient} />;
        })}
      </StyledIngredientsWrapper>
    </PageWrapper>
  );
};

export default DrinkDetail;
