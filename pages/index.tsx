import Link from 'next/link';
import { ReactElement, useState } from 'react';
import Header from '../components/Header/Header';
import MainLogo from '../components/MainLogo/MainLogo';
import PageWrapper from '../components/PageWrapper/PageWrapper';

const HomePage = (): ReactElement => {
  return (
    <PageWrapper>
      <Link href="/dashboard">
        <MainLogo />
      </Link>
    </PageWrapper>
  );
}

export default HomePage;
