import { type DrinkDetails } from './APIResponsesTypes';

export enum DrinkDetailsEntries {
  ingredient = 'strIngredient',
  measure = 'strMeasure',
}

export const arrayFromExactData = (drinks: DrinkDetails, dataName: DrinkDetailsEntries): string[] => {
  const arrayOfIngredients = [];

  for (let i = 1; i < 16; i++) {
    const ingredientIndex = `${dataName}${i}`;
    const ingredient = drinks[ingredientIndex as keyof DrinkDetails];
    if (ingredient !== null) {
      arrayOfIngredients.push(ingredient);
    }
  }
  return arrayOfIngredients;
};
