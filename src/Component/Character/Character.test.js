import { render, screen } from '@testing-library/react';
import CharacterDetail from '../../Views/CharacterDetail/CharacterDetail';
import { MemoryRouter } from 'react-router-dom';

test.skip('renders the character details', async () => {
  render(
    <MemoryRouter>
      <CharacterDetail />
      );
    </MemoryRouter>
  );

  const image = await screen.findByRole('img', { name: /Jesse Pinkman/i });
  const header = await screen.findByText(/Jesse Pinkman/i);
  const name = screen.getByText(/Teenager/i);

  expect(image).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
