import React from 'react';
import Skeleton from '@/common/components/skeleton/Skeleton';
import { Wrapper } from './SectionSkeleton.styled';

interface Props {
  quantity?: number;
}
const SectionSkeleton: React.FC<Props> = ({ quantity = 6 }) =>
  new Array(quantity).fill(0).map((_, index) => (
    <Wrapper key={index}>
      <Skeleton height="15px" width="30%" />
      <Skeleton height="25px" width="50%" />
      <Skeleton height="18px" width="100%" />
    </Wrapper>
  ));

export default SectionSkeleton;
