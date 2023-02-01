import { type TypographyProps } from '@mui/system';
import styled from 'styled-components';

const StyledMainLogo = styled.div<{ centered: boolean; fontSize: TypographyProps['fontSize'] }>`
  color: #eae2b7;
  margin: ${({ centered = false }) => (centered ? 'auto' : 'unset')};
  font-size: ${({ fontSize = '4rem' }) => fontSize};
  font-weight: bold;
  opacity: 0.7;
  pointer-events: none;
  position: relative;

  span {
    color: #fcbf49;
  }
`;

export { StyledMainLogo };
