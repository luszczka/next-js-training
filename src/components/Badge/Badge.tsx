import { type MouseEventHandler, type ReactElement } from 'react';
import { StyledBadgeWrapper } from './Badge.style';

interface Props {
  children: string;
  onClick: MouseEventHandler<HTMLElement>;
  padding?: string;
  isActive?: boolean;
}

const Badge = ({ children, onClick, padding, isActive }: Props): ReactElement => {
  return (
    <StyledBadgeWrapper onClick={onClick} padding={padding} isActive={isActive}>
      {children}
    </StyledBadgeWrapper>
  );
};

export default Badge;
