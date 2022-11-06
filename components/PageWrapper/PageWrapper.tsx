import { ReactElement, ReactNode } from "react";
import { StyledPageWrapper } from "./PageWrapper.styled";

type Props = {
    children: ReactNode;
}

const PageWrapper = ({children}: Props): ReactElement => {
    return <StyledPageWrapper>{children}</StyledPageWrapper>;
  }

export default PageWrapper;
