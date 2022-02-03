import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('renders the character list', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const header = await screen.findByText(/Choose A Character/i);
  expect(header).toBeInTheDocument();

  const link = screen.getByRole('link', { name: /Marie/i });
  userEvent.click(link);
  const image = await screen.findAllByRole('img');
  expect(image).toHaveLength(1);
});
