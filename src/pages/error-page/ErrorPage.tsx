import { FC } from 'react';
import { Container, Image, Wrapper, Text } from './ErrorPage.styed';

interface Props {
  img: string;
  text: string;
  alt: string;
}
const ErrorPage: FC<Props> = ({ img, text, alt }) => {
  return (
    <Wrapper>
      <Container>
        <Image src={img} alt={alt} />
        <Text>{text}</Text>
      </Container>
    </Wrapper>
  );
};

export default ErrorPage;
