import { type ReactNode, type ReactElement } from 'react';
import { StyledContainer } from './Container.styled';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props): ReactElement => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
