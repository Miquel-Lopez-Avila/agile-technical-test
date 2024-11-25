import { FC, ReactNode } from 'react';
import Header from '@/application/components/header/Header';
import Footer from '@/application/components/footer/Footer';

interface Props {
  component: ReactNode;
}

const PageLayout: FC<Props> = ({ component }) => {
  return (
    <div>
      <Header />
      <main>{component}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
