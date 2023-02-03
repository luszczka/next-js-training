import { type DrinkDetails } from '../utils/APIResponsesTypes';
import { useEffect, useState } from 'react';

const useDrinkDetails = (id: string): DrinkDetails | undefined => {
  const [data, setData] = useState<DrinkDetails>();

  useEffect(() => {
    const fetchDrinkDetails = async (): Promise<void> => {
      try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/lookup.php?i=${id}`);
        const response = await result.json();
        setData(response.drinks[0]);
      } catch (error) {
        console.error(error, 'ERROR');
      }
    };

    void fetchDrinkDetails();
  }, []);

  return data;
};

export default useDrinkDetails;
