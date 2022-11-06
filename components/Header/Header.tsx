import { ReactElement } from "react";
import { StyledHeader } from "./Header.styled";

type Props = {
  title: string;
}

const Header = ({ title }: Props): ReactElement => {
    return <StyledHeader>{title ? title : 'Default title'}</StyledHeader>;
  }

export default Header;
