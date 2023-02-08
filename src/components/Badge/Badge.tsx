import { type MouseEventHandler, type ReactElement } from 'react';
import { StyledBadgeWrapper } from './Badge.style';

interface Props {
  children: string;
  onClick: MouseEventHandler<HTMLElement>;
}

const Badge = ({ children, onClick }: Props): ReactElement => {
  return <StyledBadgeWrapper onClick={onClick}>{children}</StyledBadgeWrapper>;
};

export default Badge;
