import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bye there link', () => {
  render(<App />);
  const linkElement = screen.getByText(/bye there!/i); // Changed this line
  expect(linkElement).toBeInTheDocument();
});

