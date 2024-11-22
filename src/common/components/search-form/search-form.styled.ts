import styled from 'styled-components';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { paletteColors } from '@/application/styles/palette-colors';
import { device } from '@/application/styles/breakpoints';
import { Size } from './enums';

export const Wrapper = styled.div<{
  size: Size.MEDIUM | Size.SMALL;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 8px;
  border: 1px solid ${paletteColors.grey};
  border-radius: 24px !important;
  min-width: 100%;

  @media ${device.tablet} {
    min-width: ${({ size }) => (size === Size.MEDIUM ? '584px' : '384px')};
  }
`;

export const TextareaField = styled.textarea`
  width: 100%;
  border: unset;
  resize: none;
  line-height: 22px;
  max-height: 200px;
  overflow-x: hidden;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  width: 20px;
  margin: 10px 8px;
`;

export const CloseIcon = styled(CloseOutlined)`
  width: 15px;
  cursor: pointer;
  margin: 10px 8px;
`;

export const ContainerIcons = styled.div`
  display: grid;
  place-items: center;
  height: fit-content;
`;

export const Form = styled.form<{
  size: Size.MEDIUM | Size.SMALL;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;

  ${TextareaField} {
    padding-top: ${({ size }) => (size === Size.MEDIUM ? '11px' : '7px')};
    min-height: ${({ size }) => (size === Size.MEDIUM ? '36px' : '22px')};
    margin-bottom: ${({ size }) => (size === Size.MEDIUM ? '8px' : '4px')};
    font-size: ${({ size }) => (size === Size.MEDIUM ? '16px' : '14px')};
  }

  ${ContainerIcons} {
    min-height: ${({ size }) => (size === Size.MEDIUM ? '44px' : '22px')};
  }

  @media ${device.tablet} {
    width: fit-content;
  }
`;
