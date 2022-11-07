import { ReactElement, ReactNode } from "react";
import { StyledPageWrapper } from "./PageWrapper.styled";

type Props = {
    centered?: boolean;
    children: ReactNode;
    isAnimated?: boolean;
}

const PageWrapper = ({centered, children, isAnimated}: Props): ReactElement => {
    return <StyledPageWrapper centered={centered} isAnimated={isAnimated}>{children}</StyledPageWrapper>;
  }

export default PageWrapper;
