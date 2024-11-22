import styled from 'styled-components';
import { paletteColors } from '@/application/styles/palette-colors';
import { device } from '@/application/styles/breakpoints';

export const Wrapper = styled.header`
  padding: 10px 15px;
  border-bottom: 1px solid ${paletteColors.lightGrey};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1200px;
`;

export const ContainerBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;

  @media ${device.tablet} {
    gap: 20px;
    width: fit-content;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const BrandName = styled.p`
  text-align: left;
`;

export const AppStoreIcon = styled.img`
  width: 25px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  display: flex;
  width: 48px;
  padding: 4px;
`;
