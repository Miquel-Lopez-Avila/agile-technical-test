import styled from 'styled-components';
import { device } from '@/application/styles/breakpoints';

export const Wrapper = styled.div`
  min-height: calc(100vh - 95px - 50px);
  padding: 30px 15px;

  @media ${device.tablet} {
    min-height: calc(100vh - 69px - 50px);
    padding: 20px 20px;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const ContainerSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 4;
`;

export const ContainerPreview = styled.div`
  display: flex;
  max-width: 800px;
  flex: 2;
`;
