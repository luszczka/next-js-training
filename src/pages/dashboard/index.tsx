import { type ReactElement } from 'react';
import DrinkOfTheDay from '../../components/DrinkOfTheDay/DrinkOfTheDay';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const Dashboard = (): ReactElement => {
  return (
    <PageWrapper>
      <Navigation />
      <DrinkOfTheDay />
    </PageWrapper>
  );
};

export default Dashboard;
