import { type TypographyProps } from '@mui/system';
import Link from 'next/link';
import { type ReactElement } from 'react';
import { StyledMainLogo } from './MainLogo.styled';

interface Props {
  fontSize?: TypographyProps['fontSize'];
}

const MainLogo = ({ fontSize }: Props): ReactElement => {
  return (
    <Link href="/dashboard">
      <StyledMainLogo centered={false} fontSize={fontSize}>
        drink.<span>me</span>
      </StyledMainLogo>
    </Link>
  );
};

export default MainLogo;
