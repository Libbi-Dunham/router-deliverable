import { render, screen } from '@testing-library/react';
import CharacterDetail from '../../Views/CharacterDetail/CharacterDetail';
import { MemoryRouter, Route } from 'react-router-dom';

test('renders the character details', async () => {
  render(
    <MemoryRouter initialEntries={['/character/2']}>
      <Route path="/character/:id">
        <CharacterDetail />
      </Route>
      );
    </MemoryRouter>
  );

  const image = await screen.findByRole('img');
  screen.debug();
  const header = await screen.findByText(/Jesse Pinkman/i);
  const name = screen.getByText(/Meth Dealer/i);

  expect(image).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
