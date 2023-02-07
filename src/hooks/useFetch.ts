import { useEffect, useState } from 'react';

interface UseFetchResult<T> {
  data: T | undefined;
  fetcher: (url?: string) => Promise<void>;
}

interface Props {
  path: string;
  enabled?: boolean;
}

const useFetch = <T>({ path, enabled = true }: Props): UseFetchResult<T> => {
  const [data, setData] = useState<T | undefined>();
  const fetcher = async (url?: string): Promise<void> => {
    try {
      const queryUrl = url ?? path;
      const result = await fetch(`${process.env.NEXT_PUBLIC_URL}${queryUrl}`);
      const response = await result.json();
      setData(response);
    } catch (error) {
      console.error(error, 'ERROR');
    }
  };
  useEffect(() => {
    if (enabled) {
      void fetcher(path);
    }
  }, []);

  return { data, fetcher };
};

export default useFetch;
