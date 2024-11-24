import '@testing-library/jest-dom';
import { render, RenderOptions } from '@testing-library/react';
import { beforeAll, vi } from 'vitest';

beforeAll(() => {
  vi.mock('react-router-dom', async (importOriginal) => {
    const mockedNavigate = vi.fn();
    const actual = await importOriginal();

    return {
      ...(actual || {}),
      useNavigate: () => mockedNavigate
    };
  });
});

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { ...options });

export { customRender as render };
