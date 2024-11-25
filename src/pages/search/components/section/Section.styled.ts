import styled from 'styled-components';
import { paletteColors } from '@/application/styles/palette-colors';
import Link from '@/common/components/link/Link';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const SectionLink = styled(Link)`
  font-size: 12px;
  color: ${paletteColors.black};
  text-decoration: none;
  width: fit-content;
  white-space: nowrap;
`;

export const Title = styled.p`
  color: ${paletteColors.blue};
  font-size: 22px;
  cursor: pointer;
  width: fit-content;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;
