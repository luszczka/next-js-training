import { type ReactElement } from 'react';
import DrinkOfTheDay from '../../components/DrinkOfTheDay/DrinkOfTheDay';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import SearchForDrinks from '../../components/SearchForDrinks/SearchForDrinks';

const Dashboard = (): ReactElement => {
  return (
    <PageWrapper>
      <Navigation />
      <DrinkOfTheDay />
      <SearchForDrinks />
    </PageWrapper>
  );
};

export default Dashboard;
