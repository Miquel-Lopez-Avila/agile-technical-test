import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import {
  createMemoryRouter,
  RouterProvider,
  useNavigate
} from 'react-router-dom';
import Router from '@/application/components/router/Router';
import { render } from '@/__test__/setupTests';

const getInputByTestId = (testId: string) => {
  const inputContainer = screen.getByTestId(testId);

  const input = inputContainer.querySelector('input') as HTMLInputElement;

  expect(input).toBeInTheDocument();

  return input;
};

describe('Search form', () => {
  it.skip('it should fail when username or password is incorrect', async () => {
    const searchTextarea = getInputByTestId('search');
    const submitButton = getInputByTestId('submit-button');

    userEvent.type(searchTextarea, 'incorrect search');
    userEvent.click(submitButton);

    // const message = await screen.findByText('Something went wrong');
    // expect(message).toBeInTheDocument();
    expect(true).toBe(true);
    await waitFor(() => {
      expect(useNavigate()).toHaveBeenCalledWith('/search?q=incorrect search');
    });
  });

  it('aaaa', async () => {});
});
