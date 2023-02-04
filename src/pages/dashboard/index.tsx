import { debounce } from 'lodash';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import DrinkOfTheDay from '../../components/DrinkOfTheDay/DrinkOfTheDay';
import InputSearch from '../../components/InputSearch/InputSearch';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import useFetch from '../../hooks/useFetch';
import { type DrinksByName } from '../../utils/APIResponsesTypes';

const Dashboard = (): ReactElement => {
  const [value, setValue] = useState<string>('');
  const { fetcher } = useFetch<{ drinks: DrinksByName[] }>(`/search.php?s=${value}`) || {};
  const debouncedOnChange = useRef(debounce(fetcher, 700));

  useEffect(() => {
    debouncedOnChange.current(`/search.php?s=${value}`);
  }, [value]);

  return (
    <PageWrapper>
      <Navigation />
      <DrinkOfTheDay />
      <InputSearch value={value} setValue={setValue} />
    </PageWrapper>
  );
};

export default Dashboard;
