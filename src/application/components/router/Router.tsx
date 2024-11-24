import { createBrowserRouter, Navigate } from 'react-router-dom';
import notFoundImage from '@/application/assets/not-found.svg';
import appErrorImg from '@/application/assets/bug-fixing.svg';
import ErrorPage from '@/pages/error-page/ErrorPage';
import PageLayout from '@/application/components/page-layout/PageLayout';
import AppLayout from '@/application/components/app-layout/AppLayout';
import { Paths } from '@/application/enums/router-paths';

const Router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <AppLayout />,
    errorElement: (
      <PageLayout
        component={
          <ErrorPage alt="error" img={appErrorImg} text="pages.error.error" />
        }
      />
    ),
    children: [
      {
        path: '',
        element: <Navigate to="home" replace />
      },
      {
        path: Paths.HOME,
        lazy: async () => {
          const Home = (await import('@/pages/home/Home')).default;

          return {
            element: <PageLayout component={<Home />} />
          };
        }
      },
      {
        path: Paths.SEARCH,
        lazy: async () => {
          const { location } = window;
          const searchParams = new URLSearchParams(location.search);

          const Search = (await import('@/pages/search/Search')).default;

          // Redirect to home page if no search params are provided
          if (location.pathname === '/search' && !searchParams.has('q')) {
            return { element: <Navigate to="/home" replace /> };
          }

          return {
            element: <PageLayout component={<Search />} />
          };
        }
      },
      {
        path: '*',
        element: (
          <PageLayout
            component={
              <ErrorPage
                alt="404"
                img={notFoundImage}
                text="pages.error.notFound"
              />
            }
          />
        )
      }
    ]
  }
]);

export default Router;
