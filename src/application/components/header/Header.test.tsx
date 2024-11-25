import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import PageLayout from '@/application/components/page-layout/PageLayout';
import { Paths } from '@/application/enums/router-paths';
import Search from '@/pages/search/Search';

describe('Header display', () => {
  it('Validating that the correct header is shown in Home view', async () => {
    const router = createMemoryRouter(
      [
        {
          path: Paths.HOME,
          element: <PageLayout component={<Home />} />
        }
      ],
      {
        initialEntries: ['/home']
      }
    );

    render(<RouterProvider router={router} />);

    const searchTextarea = screen.getByTestId('company-name');

    expect(searchTextarea).toBeInTheDocument();
  });

  it('Validating that the correct header is shown in Search view', async () => {
    const router = createMemoryRouter(
      [
        {
          path: Paths.SEARCH,
          element: <PageLayout component={<Search />} />
        }
      ],
      {
        initialEntries: ['/search']
      }
    );

    render(<RouterProvider router={router} />);

    const searchTextarea = screen.getByTestId('logo');

    expect(searchTextarea).toBeInTheDocument();
  });
});
