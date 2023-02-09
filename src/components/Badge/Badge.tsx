import { type MouseEventHandler, type ReactElement } from 'react';
import { StyledBadgeWrapper } from './Badge.style';

interface Props {
  children: string;
  onClick: MouseEventHandler<HTMLElement>;
  padding?: string;
}

const Badge = ({ children, onClick, padding }: Props): ReactElement => {
  return (
    <StyledBadgeWrapper onClick={onClick} padding={padding}>
      {children}
    </StyledBadgeWrapper>
  );
};

export default Badge;
