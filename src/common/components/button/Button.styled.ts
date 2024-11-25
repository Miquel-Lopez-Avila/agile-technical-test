import styled from 'styled-components';
import { paletteColors } from '@/application/styles/palette-colors';

export const ButtonWrapper = styled.button`
  padding: 10px 18px;
  margin: 0;
  border-radius: 4px;
  font-weight: 500;
  border: unset;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'unset')};
  transition: background-color 0.3s ease;

  color: ${({ disabled }) =>
    disabled ? paletteColors.lightGrey : paletteColors.black};

  &:hover {
    background-color: ${paletteColors.darkSmokeGrey};
  }
`;
