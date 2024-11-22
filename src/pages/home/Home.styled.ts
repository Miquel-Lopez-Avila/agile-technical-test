import styled from 'styled-components';
import { device } from '@/application/styles/breakpoints';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 95px - 50px);
  padding: 10px 20px;

  @media ${device.tablet} {
    min-height: calc(100vh - 69px - 50px);
    padding: 20px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
