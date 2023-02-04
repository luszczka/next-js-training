import { useEffect, useState } from 'react';

interface UseFetchResult<T> {
  data: T | undefined;
  fetcher: () => Promise<void>;
}

const useFetch = <T>(path: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | undefined>();
  const fetcher = async (): Promise<void> => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_URL}${path}`);
      const response = await result.json();
      setData(response);
    } catch (error) {
      console.error(error, 'ERROR');
    }
  };
  useEffect(() => {
    void fetcher();
  }, []);

  return { data, fetcher };
};

export default useFetch;
