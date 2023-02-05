import { type ReactElement } from 'react'
import MainLogo from '../MainLogo/MainLogo'
import { StyledNavigation } from './Navigation.styled'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Link from 'next/link'
import Container from '../Container/Container';

const Navigation = (): ReactElement => {
  return (
    <StyledNavigation>
      <Container>
        <MainLogo fontSize="2rem" />
        <Link href="/profile">
          <PermIdentityIcon fontSize="large" htmlColor="#FCBF49" opacity=".7" />
        </Link>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation
