import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllAnimals } from '@/common/utils/fake-data';
import { Wrapper, Text } from './NoMatchFound.styled';

interface Props {
  searchValue?: string | null;
}
const NoMatchFound: FC<Props> = ({ searchValue }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {searchValue && (
        <Text>
          {t('pages.search.noResultsFound')}: <b>'{searchValue}'</b>
        </Text>
      )}
      <Text>
        {t('pages.search.tryLooking')}: <b>{getAllAnimals().join(', ')}.</b>
      </Text>
    </Wrapper>
  );
};

export default NoMatchFound;
