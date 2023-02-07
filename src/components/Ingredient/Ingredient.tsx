import { type ReactElement } from 'react';
import { StyledIngredientWrapper } from './Ingredient.style';

interface Props {
  ingredient: string;
}

const Ingredient = ({ ingredient }: Props): ReactElement => {
  return <StyledIngredientWrapper>{ingredient}</StyledIngredientWrapper>;
};

export default Ingredient;
