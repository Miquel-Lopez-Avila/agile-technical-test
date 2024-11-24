import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Image, Wrapper, Text } from './ErrorPage.styed';

interface Props {
  img: string;
  text: string;
  alt: string;
}
const ErrorPage: FC<Props> = ({ img, text, alt }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <Image src={img} alt={alt} />
        <Text>{t(text)}</Text>
      </Container>
    </Wrapper>
  );
};

export default ErrorPage;
