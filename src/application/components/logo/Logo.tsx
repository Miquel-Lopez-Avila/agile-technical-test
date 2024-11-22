import React from 'react';
import googleImage from '@/application/assets/google.png';
import { LogoImage } from './Logo.styed';

interface Props {
  width?: number | 'auto';
  cursor?: 'pointer';
}

const Logo: React.FC<Props> = ({ width = 'auto', cursor }) => (
  <LogoImage
    src={googleImage}
    alt="google-logo"
    width={width}
    cursor={cursor}
  />
);

export default Logo;
