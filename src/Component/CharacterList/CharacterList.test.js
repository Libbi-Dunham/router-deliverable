import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders the characterList', async () => {
  render(<App />);

  const header = await screen.findByText(/Choose A Character/i);
  const image = await screen.findByRole('img', { name: /Jesse Pinkman/i });
  const name = screen.getByText(/Skyler White/i);

  expect(header).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
