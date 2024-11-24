import styled from 'styled-components';
import { device } from '@/application/styles/breakpoints';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 55px - 50px);
  padding: 10px 20px;

  @media ${device.tablet} {
    padding: 20px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 100%;

  @media ${device.tablet} {
    width: fit-content;
  }
`;

export const Image = styled.img`
  width: 300px;

  @media ${device.tablet} {
    width: 400px;
  }
`;

export const Text = styled.p`
  font-size: 24px;

  @media ${device.tablet} {
    font-size: 30px;
  }
`;
