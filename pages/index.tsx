import Link from 'next/link';
import { type ReactElement } from 'react';
import MainLogo from '../components/MainLogo/MainLogo';
import PageWrapper from '../components/PageWrapper/PageWrapper';

const HomePage = (): ReactElement => {
  return (
    <PageWrapper centered isAnimated>
      <Link href="/dashboard">
        <MainLogo />
      </Link>
    </PageWrapper>
  );
};

export default HomePage;
