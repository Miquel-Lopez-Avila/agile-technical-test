import { css } from 'styled-components';

export const appGlobals = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Roboto', serif;
    font-weight: 400;
    font-style: normal;
    position: relative;
    overflow-x: hidden;
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
