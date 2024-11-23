import { css } from 'styled-components';
import roboto from '@/application/fonts/Roboto/Roboto-Regular.ttf';
import fonts from '../fonts';

export const appGlobals = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
    font-weight: 400;
    font-style: normal;
    position: relative;
    overflow-x: hidden;
    ${fonts.roboto}
  }

  .backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    display: none;
  }

  #animal-mobile-preview {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 90%;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${roboto}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }
`;

const mobilePreviewContainer = document.getElementById('animal-mobile-preview');

export const showMobilePreview = () => {
  if (!mobilePreviewContainer || !mobilePreviewContainer.parentElement) return;

  mobilePreviewContainer.parentElement.style.display = 'block';
  mobilePreviewContainer.parentElement.style.top = `${window.scrollY}px`;
  document.body.style.overflow = 'hidden';
};

export const hideMobilePreview = () => {
  if (!mobilePreviewContainer || !mobilePreviewContainer.parentElement) return;

  mobilePreviewContainer.parentElement.style.display = 'none';
  document.body.style.overflow = 'unset';
};
