import { type DrinkByIngredient, type DrinksByName } from '../utils/APIResponsesTypes';
import { useEffect, useState } from 'react';

export enum SearchType {
  name = 's',
  ingredient = 'i',
}

const useSearchDrinkBy = (query: string, searchBy: SearchType): DrinksByName[] | DrinkByIngredient[] | undefined => {
  const [data, setData] = useState<DrinksByName[] | DrinkByIngredient[]>();

  useEffect(() => {
    const fetchDrinkBy = async (): Promise<void> => {
      try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/search.php?${searchBy}=${query}`);
        const response = await result.json();

        if (response.drinks !== undefined) {
          setData(response.drinks);
        }
        if (response.ingredients !== undefined) {
          setData(response.ingredients);
        }
      } catch (error) {
        console.error(error, 'ERROR');
      }
    };

    void fetchDrinkBy();
  }, []);

  return data;
};

export default useSearchDrinkBy;
