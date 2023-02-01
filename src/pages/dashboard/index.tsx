import { type ReactElement } from 'react';
import DrinkOfTheDay from '../../components/DrinkOfTheDay/DrinkOfTheDay';
import Navigation from '../../components/Navigation/Navigation';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const Dashboard = (): ReactElement => {
  return (
    <PageWrapper>
      <Navigation />
      <DrinkOfTheDay />
      <ul>
        <li>drink of the day</li>
        <li>my drinks</li>
        <li>most liked</li>
      </ul>
      <ul>
        search by:
        <li>category</li>
        <li>alcohol</li>
        <li>glass</li>
        <li>ingredient</li>
      </ul>
    </PageWrapper>
  );
};

export default Dashboard;
