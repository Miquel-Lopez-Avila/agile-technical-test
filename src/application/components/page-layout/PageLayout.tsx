import { FC, ReactNode } from 'react';
import Header from '@/application/components/header/Header';
import Footer from '@/application/components/footer/Footer';
import { Main, Wrapper } from './PageLayout.styled';

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default PageLayout;
