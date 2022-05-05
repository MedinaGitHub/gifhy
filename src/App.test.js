import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const title = screen.getByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});
