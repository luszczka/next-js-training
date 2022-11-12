import { TypographyProps } from "@mui/system";
import styled from "styled-components"

const StyledMainLogo = styled.div<{centered: boolean, fontSize: TypographyProps["fontSize"]}>`
    color: #EAE2B7;
    margin: ${({centered}) => (centered ? "auto" : "unset")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "4rem")};
    font-weight: bold;
    opacity: .7;
    pointer-events: none;
    position: relative;

    span {
        color: #FCBF49;
    }
`

export { StyledMainLogo };
