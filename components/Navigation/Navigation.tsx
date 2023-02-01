import { type ReactElement } from 'react'
import MainLogo from '../MainLogo/MainLogo'
import { StyledNavigation } from './Navigation.styled'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Link from 'next/link'

const Navigation = (): ReactElement => {
  return (
    <StyledNavigation>
        <MainLogo fontSize="2rem"/>
        <Link href="/profile">
            <PermIdentityIcon fontSize="large" htmlColor="#FCBF49" opacity=".7" />
        </Link>
    </StyledNavigation>
  )
}

export default Navigation
