import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorBoundary from '@/pages/error-boundary/ErrorBoundary';
import PageLayout from '@/application/components/page-layout/PageLayout';
import AppLayout from '@/application/components/app-layout/AppLayout';
import { Paths } from '@/application/enums/router-paths';

const Router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
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
        element: <h1>404 PAGE</h1>
      }
    ]
  }
]);

export default Router;
