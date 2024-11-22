import React from 'react';
import { Main, Wrapper } from './PageLayout.styled';
import Header from '@/application/components/header/Header';
import Footer from '@/application/components/footer/Footer';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default PageLayout;
