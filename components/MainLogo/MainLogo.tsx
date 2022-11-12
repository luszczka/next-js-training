import { TypographyProps } from "@mui/system";
import { ReactElement } from "react";
import { StyledMainLogo } from "./MainLogo.styled";

type Props = {
    fontSize?: TypographyProps["fontSize"];
}

const MainLogo = ({fontSize}: Props): ReactElement => {
    return <StyledMainLogo fontSize={fontSize}>drink.<span>me</span></StyledMainLogo>
}

export default MainLogo;
