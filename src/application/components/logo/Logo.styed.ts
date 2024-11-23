import styled from 'styled-components';
import { isNumber } from '@/common/utils/type-predicates';

export const LogoImage = styled.img`
  display: flex;
  width: ${({ width }) => (isNumber(width) ? `${width}px` : width)};
`;
