import { FC } from 'react';
import { Wrapper } from './Skeleton.styled';

interface Props {
  width?: string;
  height?: string;
}

const Skeleton: FC<Props> = ({ width = '100%', height = '20px' }) => (
  <Wrapper width={width} height={height} />
);

export default Skeleton;
