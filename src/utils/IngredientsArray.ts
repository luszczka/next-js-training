import { type DrinkDetails } from './APIResponsesTypes';

export const IngredientsArray = (drinks: DrinkDetails): string[] => {
  const arrayOfIngredients = [];

  for (let i = 1; i < 16; i++) {
    const ingredientIndex = `strIngredient${i}`;
    const ingredient = drinks[ingredientIndex as keyof DrinkDetails];
    if (ingredient !== null) {
      arrayOfIngredients.push(ingredient);
    }
  }
  return arrayOfIngredients;
};
