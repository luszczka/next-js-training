import { StyledMainLogo } from "./MainLogo.styled";

type Props = {
    animated?: boolean;
}

const MainLogo = ({animated}: Props) => {
    return <StyledMainLogo >drink.<span>me</span></StyledMainLogo>
}

export default MainLogo;
