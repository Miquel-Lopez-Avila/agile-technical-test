import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorBoundary from '@/pages/error-boundary/ErrorBoundary';
import Home from '@/pages/home/Home';
import { CommonProviders } from './components/common-providers/CommonProviders';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <CommonProviders />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Navigate to="home" replace />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: '*',
        element: <h1>404 PAGE</h1>
      }
    ]
  }
]);

export default Router;
