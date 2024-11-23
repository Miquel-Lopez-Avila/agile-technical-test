import { FC } from 'react';
import googleImage from '@/application/assets/google.png';
import { LogoImage } from './Logo.styed';

interface Props {
  width?: number | 'auto';
}

const Logo: FC<Props> = ({ width = 'auto' }) => (
  <LogoImage src={googleImage} alt="google-logo" width={width} />
);

export default Logo;
