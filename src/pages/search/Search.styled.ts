import styled from 'styled-components';
import { device } from '@/application/styles/breakpoints';

export const Wrapper = styled.div`
  min-height: calc(100vh - 81px - 50px);
  padding: 20px 15px;

  @media ${device.tablet} {
    min-height: calc(100vh - 55px - 50px);
    padding: 30px 107px;
  }
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const ContainerSections = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 4;
  width: 100%;
`;

export const ContainerPreview = styled.div`
  display: flex;
  max-width: 800px;
  flex: 2;
`;
