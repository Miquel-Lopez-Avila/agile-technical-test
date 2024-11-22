import React from 'react';
import { Wrapper, Text } from './NoMatchFound.styled';
import { getAllAnimals } from '@/common/utils/fake-data';

interface Props {
  searchValue?: string | null;
}
const NoMatchFound: React.FC<Props> = ({ searchValue }) => {
  return (
    <Wrapper>
      {searchValue && (
        <Text>
          No results found for:{' '}
          <span style={{ fontWeight: 'bold' }}>'{searchValue}'</span>
        </Text>
      )}
      <Text>
        Try looking for:{' '}
        <span style={{ fontWeight: 'bold' }}>
          {getAllAnimals().join(', ')}.
        </span>
      </Text>
    </Wrapper>
  );
};

export default NoMatchFound;
