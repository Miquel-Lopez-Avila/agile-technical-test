import { beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import PageLayout from '@/application/components/page-layout/PageLayout';
import { Paths } from '@/application/enums/router-paths';
import Search from '@/pages/search/Search';

const mockedNavigate = vi.fn();

describe('Search form', () => {
  beforeEach(() => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const actual = await importOriginal();

      return {
        ...(actual || {}),
        useNavigate: () => mockedNavigate
      };
    });
  });

  it('it should search for dogs if user types dog in the search form', async () => {
    const router = createMemoryRouter(
      [
        {
          path: Paths.HOME,
          element: <PageLayout component={<Home />} />
        },
        {
          path: Paths.SEARCH,
          element: <PageLayout component={<Search />} />
        }
      ],
      {
        initialEntries: ['/home']
      }
    );

    render(<RouterProvider router={router} />);

    const searchTextarea = screen.getByTestId('search');
    const submitButton = screen.getByTestId('submit-button');

    await userEvent.type(searchTextarea, 'dog');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('/search?q=dog');
    });
  });

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

  it('Valifating that the correct header is shown in Search view', async () => {
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
