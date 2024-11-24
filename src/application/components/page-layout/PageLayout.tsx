import { FC, ReactNode } from 'react';
import Header from '@/application/components/header/Header';
import Footer from '@/application/components/footer/Footer';
import { Main, Wrapper } from './PageLayout.styled';

interface Props {
  component: ReactNode;
}

const PageLayout: FC<Props> = ({ component }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{component}</Main>
      <Footer />
    </Wrapper>
  );
};

export default PageLayout;
