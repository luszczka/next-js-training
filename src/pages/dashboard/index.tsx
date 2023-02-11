import { useRouter } from 'next/router';
import { type ParsedUrlQuery } from 'querystring';
import { type ReactElement } from 'react';
import DrinkOfTheDay from '../../components/DrinkOfTheDay/DrinkOfTheDay';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchForDrinks from '../../components/SearchForDrinks/SearchForDrinks';

export interface QParams extends ParsedUrlQuery {
  ingredient: string;
}

const Dashboard = (): ReactElement => {
  const { query } = useRouter();
  const { ingredient } = query as QParams;

  return (
    <PageWrapper>
      <Navigation />
      <DrinkOfTheDay />
      <SearchForDrinks initialValue={ingredient} />
    </PageWrapper>
  );
};

export default Dashboard;
