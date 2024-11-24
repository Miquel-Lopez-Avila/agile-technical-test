import styled, { css } from 'styled-components';
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
  padding: 0 3px;
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
  padding: 5px;
`;

export const CloseIcon = styled(CloseOutlined)`
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  background-color: unset;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${paletteColors.darkGrey};
  }
`;

export const ContainerIcons = styled.div`
  display: grid;
  place-items: center;
  height: fit-content;
  width: 42px;
`;

const textareaFieldMedium = css`
  padding-top: 11px;
  min-height: 36px;
  margin-bottom: 8px;
  font-size: 16px;
`;

const textareaFieldSmall = css`
  padding-top: 4px;
  min-height: 22px;
  margin-bottom: 4px;
  font-size: 14px;
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
    ${({ size }) =>
      size === Size.MEDIUM ? textareaFieldMedium : textareaFieldSmall};
  }

  ${ContainerIcons} {
    min-height: ${({ size }) => (size === Size.MEDIUM ? '44px' : '22px')};
  }

  ${CloseIcon}, ${SearchIcon} {
    margin: ${({ size }) => (size === Size.MEDIUM ? '10px 8px' : '2px 8px')};
  }

  @media ${device.tablet} {
    width: fit-content;
  }
`;
