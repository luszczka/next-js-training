import { type RandomDrink } from '../fetchers/APIResponsesTypes';
import { useEffect, useState } from 'react';

const useRandomDrink = (): RandomDrink | undefined => {
  const [data, setData] = useState<RandomDrink>();

  useEffect(() => {
    const getRandomDrink = async (): Promise<void> => {
      try {
        const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const response = await result.json();
        setData(response.drinks[0]);
      } catch (error) {
        console.error(error, 'ERROR');
      }
    };

    void getRandomDrink();
  }, []);

  return data;
};

export default useRandomDrink;
