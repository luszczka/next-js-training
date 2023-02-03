import { type RandomDrink } from '../utils/APIResponsesTypes';
import { useEffect, useState } from 'react';

const useRandomDrink = (): RandomDrink | undefined => {
  const [data, setData] = useState<RandomDrink>();

  useEffect(() => {
    const fetchRandomDrink = async (): Promise<void> => {
      try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/random.php`);
        const response = await result.json();
        setData(response.drinks[0]);
      } catch (error) {
        console.error(error, 'ERROR');
      }
    };

    void fetchRandomDrink();
  }, []);

  return data;
};

export default useRandomDrink;
