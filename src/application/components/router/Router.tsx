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
      <PageLayout>
        <ErrorPage alt="error" img={appErrorImg} text="An error has occurred" />
      </PageLayout>
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
            element: (
              <PageLayout>
                <Home />
              </PageLayout>
            )
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
            element: (
              <PageLayout>
                <Search />
              </PageLayout>
            )
          };
        }
      },
      {
        path: '*',
        element: (
          <PageLayout>
            <ErrorPage alt="404" img={notFoundImage} text="Page not found" />
          </PageLayout>
        )
      }
    ]
  }
]);

export default Router;
