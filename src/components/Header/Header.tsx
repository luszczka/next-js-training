import { type ReactElement } from 'react';
import { StyledHeader } from './Header.styled';

interface Props {
  title: string;
}

const Header = ({ title = 'Default title' }: Props): ReactElement => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
