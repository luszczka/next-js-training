import { type TypographyProps } from '@mui/system';
import { type ReactElement } from 'react';
import { StyledMainLogo } from './MainLogo.styled';

interface Props {
  fontSize?: TypographyProps['fontSize'];
}

const MainLogo = ({ fontSize }: Props): ReactElement => {
  return (
    <StyledMainLogo centered={false} fontSize={fontSize}>
      drink.<span>me</span>
    </StyledMainLogo>
  );
};

export default MainLogo;
