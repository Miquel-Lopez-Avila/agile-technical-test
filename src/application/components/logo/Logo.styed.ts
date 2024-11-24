import styled from 'styled-components';
import { isNumber } from '@/common/utils/type-predicates';

export const LogoImage = styled.img`
  display: flex;
  width: ${({ width }) => (isNumber(width) ? `${width}px` : width)};
  min-height: ${({ height }) => (isNumber(height) ? `${height}px` : height)};
`;
