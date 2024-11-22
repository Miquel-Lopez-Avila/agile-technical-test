import { Outlet } from 'react-router-dom';
import GlobalStyles from '@/application/styles/global-styles';

const AppLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
};

export default AppLayout;
